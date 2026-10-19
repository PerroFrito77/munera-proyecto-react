import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';

export default function Home() {
  return (
    <>
      <Header title="Bienvenido a TURTLE INC" />
      <main>
        <div className="contenido">
          <h2>Bienvenid@ a TURTLE INC, conviertete en todo un tortugo</h2>
          <p>
            !Bienvenido a tu nuevo lugar favorito para vestir con estilo¡
          </p>
          <p>
            <strong>¿Buscas algo mas que ropa?</strong>
          </p>
          <p>
            Aqui no solo encuentras prendas con diseños unicos, sino una experiencia de comodidad, elegancia y auntenticidad.
          </p>
          <p>
            Cada articulo que ves fue elegido pensando en ti, en tu personalidad, tu actitud y ese estilo que te hace destacar.
          </p>
          <p>
            Explora, elije y sorprende. Desde looks casuales hasta outfits con presencia, lo tenemos todo y lo mejor para ti; estamos aqui para acompañarte en cada paso con atencion personalizada y servicio de calidad.
          </p>
          <p>
            <strong>¿List@ para transformar tu forma de vestir?</strong>
          </p>

          <div style={{ display: 'flex', gap: '15px', justifyContent: 'center', marginTop: '30px', flexWrap: 'wrap' }}>
            <Link to="/prendas" className="btn-canjear" style={{ textDecoration: 'none' }}>
              Explorar Prendas 👕
            </Link>
            <Link to="/ultimos-drops" className="btn-canjear" style={{ background: '#2e8b57', color: 'white', textDecoration: 'none' }}>
              Ver Últimos Drops 🔥
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
