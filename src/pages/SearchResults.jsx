import React from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import Header from '../components/Header';
import { products, upcomingDrops } from '../data/products';

export default function SearchResults() {
  const [searchParams] = useSearchParams();
  const query = (searchParams.get('q') || '').toLowerCase().trim();

  const filteredProducts = products.filter(p => {
    return (
      p.name.toLowerCase().includes(query) ||
      p.displayName.toLowerCase().includes(query) ||
      p.category.toLowerCase().includes(query) ||
      p.description.toLowerCase().includes(query) ||
      p.itemCode.toLowerCase().includes(query) ||
      p.specs.some(s => s.toLowerCase().includes(query))
    );
  });

  const filteredDrops = upcomingDrops.filter(d => {
    return d.name.toLowerCase().includes(query);
  });

  return (
    <>
      <Header title={`Búsqueda: "${query}"`} />
      <main>
        <div style={{ maxWidth: '1200px', margin: '20px auto 0', padding: '0 20px', textAlign: 'left' }}>
          <Link to="/prendas" className="volver">‹ Volver al catálogo</Link>
          <h2 style={{ color: '#2e8b57', margin: '15px 0' }}>
            Resultados para "{query}" ({filteredProducts.length + filteredDrops.length} encontrados)
          </h2>
        </div>

        {filteredProducts.length === 0 && filteredDrops.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '60px 20px' }}>
            <p style={{ fontSize: '1.2rem', color: '#666', fontFamily: 'Poppins' }}>
              No encontramos prendas que coincidan con tu búsqueda 🐢
            </p>
            <Link to="/prendas" className="btn-canjear" style={{ textDecoration: 'none', display: 'inline-block', marginTop: '15px' }}>
              Ver Todas las Prendas
            </Link>
          </div>
        ) : (
          <section className="productos">
            {filteredProducts.map(prod => (
              <div key={prod.id} className="producto">
                <Link to={`/producto/${prod.slug}`}>
                  <img src={prod.images[0]} alt={prod.displayName} />
                  <h3>{prod.displayName}</h3>
                  <p className="precio">{prod.priceFormatted}</p>
                </Link>
              </div>
            ))}

            {filteredDrops.map(drop => (
              <div key={drop.id} className="producto">
                <img src={drop.image} alt={drop.name} />
                <span className="proximamente">PRÓXIMAMENTE</span>
                <h3>{drop.name}</h3>
                <p className="precio">{drop.priceFormatted}</p>
              </div>
            ))}
          </section>
        )}
      </main>
    </>
  );
}
