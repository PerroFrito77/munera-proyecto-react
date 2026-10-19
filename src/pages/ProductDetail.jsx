import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '../components/Header';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';

export default function ProductDetail() {
  const { slug } = useParams();
  const { addToCart } = useCart();

  // Find product by slug or id
  const product = products.find(p => p.slug === slug || p.id === slug) || products[0];

  const [selectedSize, setSelectedSize] = useState(product?.sizes ? product.sizes[0] : 'M');
  const [activeImage, setActiveImage] = useState(product?.images ? product.images[0] : '');
  const [addedMessage, setAddedMessage] = useState(false);

  if (!product) {
    return (
      <>
        <Header title="Producto no encontrado" />
        <main style={{ padding: '60px 20px', textAlign: 'center' }}>
          <h2>El producto que buscas no está disponible</h2>
          <Link to="/prendas" className="btn-canjear" style={{ textDecoration: 'none', display: 'inline-block', marginTop: '20px' }}>
            Volver a Prendas
          </Link>
        </main>
      </>
    );
  }

  const handleAddToCart = () => {
    addToCart(product, selectedSize, 1);
    setAddedMessage(true);
    setTimeout(() => setAddedMessage(false), 3000);
  };

  const backLink = product.category === 'femenina' ? '/prendas/femeninas' : '/prendas/masculinas';
  const sizeGuideLink = product.sizeGuideType === 'mujer' ? '/medidas/mujer' : '/medidas/hombre';

  return (
    <>
      <Header title={product.name} />
      <main>
        <div style={{ maxWidth: '1200px', margin: '20px auto 0', padding: '0 20px', textAlign: 'left' }}>
          <Link to={backLink} className="volver">‹ Volver al catálogo</Link>
        </div>

        <section className="detalle-producto">
          {/* GALERÍA DE IMÁGENES */}
          <div className="galeria">
            {product.images.map((imgSrc, idx) => (
              <img
                key={idx}
                src={imgSrc}
                alt={`${product.name} - Vista ${idx + 1}`}
                onClick={() => setActiveImage(imgSrc)}
                style={{
                  border: activeImage === imgSrc ? '2px solid #2e8b57' : 'none'
                }}
              />
            ))}
          </div>

          {/* INFORMACIÓN DEL PRODUCTO */}
          <div className="info-detalle">
            <p className="codigo">Item: {product.itemCode}</p>
            <h1>{product.name}</h1>
            <h2>{product.priceFormatted}</h2>

            <hr />

            <p>{product.modelNote}</p>

            <div className="tallas">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  type="button"
                  className={selectedSize === size ? 'active' : ''}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </button>
              ))}
            </div>

            <button
              type="button"
              className="boton1"
              onClick={handleAddToCart}
            >
              AGREGAR AL CARRITO 🛒
            </button>

            {addedMessage && (
              <div className="alert-box alert-success" style={{ marginTop: '12px', textAlign: 'center' }}>
                ✓ ¡Producto agregado al carrito exitosamente!
              </div>
            )}

            <Link to={sizeGuideLink} style={{ display: 'block' }}>
              <button type="button" className="boton2">
                MEDIDAS DE UNA TALLA 📏
              </button>
            </Link>

            {/* BENEFICIOS Y DETALLES */}
            <div className="beneficios">
              <div className="card">
                <h3>Envíos gratis</h3>
                <p>Aplica para la ropa sin descuentos.</p>
              </div>

              <div className="card">
                <h3>Llega en 7 días</h3>
                <p>Solo 7 días hábiles para ciudades principales.</p>
              </div>

              <div className="card">
                <h3>Caparazones</h3>
                <p>Recibirás por tu compra 15 caparazones.</p>
              </div>

              <div className="card">
                <h3>Métodos de pago</h3>
                <p>Tarjeta de crédito, débito y contraentrega.</p>
              </div>

              {product.description && (
                <div className="card card-grande">
                  <h3>Sobre el producto</h3>
                  <p>{product.description}</p>
                </div>
              )}

              {product.specs && product.specs.length > 0 && (
                <div className="card">
                  <h3>Especificaciones</h3>
                  <ul>
                    {product.specs.map((spec, i) => (
                      <li key={i}>{spec}</li>
                    ))}
                  </ul>
                </div>
              )}

              {product.care && product.care.length > 0 && (
                <div className="card">
                  <h3>Composición y cuidados</h3>
                  <ul>
                    {product.care.map((careItem, i) => (
                      <li key={i}>{careItem}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
