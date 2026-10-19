import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import { useCart } from '../context/CartContext';

export default function Carrito() {
  const { items, updateQuantity, removeFromCart, total, totalFormatted } = useCart();
  const navigate = useNavigate();

  const handleCheckout = (e) => {
    e.preventDefault();
    if (items.length === 0 || total === 0) {
      alert("Tu carrito está vacío. Agrega productos antes de continuar.");
      return;
    }
    navigate('/pedido');
  };

  return (
    <>
      <Header title="Carrito de Compras" />
      <main>
        <div className="carrito">
          <Link to="/prendas" className="volver">
            ‹ Back
          </Link>

          <h2>Mis productos</h2>

          {items.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '40px 0' }}>
              <p style={{ fontSize: '1.2rem', color: '#777', fontFamily: 'Poppins' }}>
                Tu carrito está actualmente vacío 🐢
              </p>
              <Link to="/prendas" className="btn-canjear" style={{ textDecoration: 'none', display: 'inline-block', marginTop: '15px' }}>
                Explorar Colección
              </Link>
            </div>
          ) : (
            <>
              {items.map((item) => (
                <div key={`${item.id}-${item.size}`} className="producto-carrito">
                  <img src={item.image} alt={item.name} />

                  <div className="producto-info">
                    <h3>{item.name}</h3>
                    <p>
                      {item.subtitle} • <strong style={{ color: '#222' }}>Talla: {item.size}</strong>
                    </p>
                  </div>

                  <div className="precio">
                    {"$" + (item.price * item.quantity).toLocaleString("es-CO")}
                  </div>

                  <div className="cantidad">
                    <button
                      type="button"
                      onClick={() => updateQuantity(item.id, item.size, -1)}
                      title="Disminuir"
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      type="button"
                      onClick={() => updateQuantity(item.id, item.size, 1)}
                      title="Aumentar"
                    >
                      +
                    </button>
                  </div>

                  <button
                    type="button"
                    className="eliminar"
                    onClick={() => removeFromCart(item.id, item.size)}
                    title="Eliminar producto"
                  >
                    ✕
                  </button>
                </div>
              ))}

              <div className="total">
                Total: <strong>{totalFormatted}</strong>
              </div>

              <button
                type="button"
                className="comprar"
                onClick={handleCheckout}
              >
                Finalizar compra 🐢
              </button>
            </>
          )}
        </div>
      </main>
    </>
  );
}
