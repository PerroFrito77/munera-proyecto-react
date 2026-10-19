import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import { products } from '../data/products';

export default function PrendasMasculinas() {
  const menProducts = products.filter(p => p.category === 'masculina');

  return (
    <>
      <Header title="Prendas Masculinas" />
      <main>
        <div style={{ maxWidth: '1200px', margin: '20px auto 0', padding: '0 20px', textAlign: 'left' }}>
          <Link to="/prendas" className="volver">‹ Volver a categorías</Link>
        </div>

        <section className="productos">
          {menProducts.map(prod => (
            <div key={prod.id} className="producto">
              <Link to={`/producto/${prod.slug}`}>
                <img src={prod.images[0]} alt={prod.displayName} />
                <h3>{prod.displayName}</h3>
                <p className="precio">{prod.priceFormatted}</p>
              </Link>
            </div>
          ))}
        </section>
      </main>
    </>
  );
}
