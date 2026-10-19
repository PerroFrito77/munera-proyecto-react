import React from 'react';
import Header from '../components/Header';
import { upcomingDrops } from '../data/products';

export default function UltimosDrops() {
  return (
    <>
      <Header title="Ultimos drops" />
      <main>
        <section className="productos">
          {upcomingDrops.map((drop) => (
            <div key={drop.id} className="producto">
              <img src={drop.image} alt={drop.name} />
              <span className="proximamente">PRÓXIMAMENTE</span>
              <p className="nuevo">PROXIMAMENTE</p>
              <h3>{drop.name}</h3>
              <p className="precio">{drop.priceFormatted}</p>
            </div>
          ))}
        </section>
      </main>
    </>
  );
}
