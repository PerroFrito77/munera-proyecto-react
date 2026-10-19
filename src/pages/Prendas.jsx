import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';

export default function Prendas() {
  return (
    <>
      <Header title="Prendas" />
      <main>
        <div className="Botones">
          <Link to="/prendas/masculinas" className="card-prenda">
            <img src="/imagenes/hombre prendas.PNG" alt="Prendas masculinas" />
            <div className="texto-boton">
              <h2>Prendas Masculinas</h2>
              <p>Ver colección masculina</p>
            </div>
          </Link>

          <Link to="/prendas/femeninas" className="card-prenda">
            <img src="/imagenes/mujeres prendas.PNG" alt="Prendas femeninas" />
            <div className="texto-boton">
              <h2>Prendas Femeninas</h2>
              <p>Ver colección femenina</p>
            </div>
          </Link>
        </div>
      </main>
    </>
  );
}
