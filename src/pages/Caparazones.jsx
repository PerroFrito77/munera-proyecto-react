import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import { useAuth } from '../context/AuthContext';

export default function Caparazones() {
  const { user } = useAuth();

  return (
    <>
      <Header title="Caparazones" />
      <main>
        <div style={{ maxWidth: '900px', margin: '20px auto 0', padding: '15px 20px', background: '#e8f5e9', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap' }}>
          <div>
            <span style={{ fontSize: '1.2rem', color: '#1b5e20' }}>🐢 Tus Caparazones acumulados:</span>
            <strong style={{ fontSize: '1.5rem', color: '#2e8b57', marginLeft: '10px' }}>{user.caparazones} puntos</strong>
          </div>
          <Link to="/caparazones/canjear" className="btn-canjear" style={{ textDecoration: 'none', padding: '8px 20px', fontSize: '0.95rem' }}>
            Ir a Canjear ➔
          </Link>
        </div>

        <div className="contenedor-caparazones">
          <div className="info-caparazones">
            <h2>Información</h2>
            <p>Sigue siendo parte de la manada tortuga.</p>
            <p>Los Caparazones son nuestro sistema de recompensas.</p>
            <p>Por cada compra que hagas en la tienda, ganarás caparazones que podrás usar para obtener descuentos y recompensas exclusivas.</p>
            <p>Cuanto más compres, más caparazones acumulas y mejores beneficios obtienes.</p>
            <p style={{ fontSize: '0.9rem', color: '#888' }}>(Las recompensas pueden variar según promociones o eventos especiales en tienda.)</p>
          </div>

          <div className="recompensas-resumen">
            <h2>RECOMPENSAS</h2>
            <p>25% de descuento → 100</p>
            <p>50% de descuento → 200</p>
            <p>75% de descuento → 350</p>
            <p>99% de descuento → 666</p>

            <div style={{ marginTop: '30px' }}>
              <Link to="/caparazones/canjear" className="boton1" style={{ textAlign: 'center', textDecoration: 'none' }}>
                Canjear Caparazones
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
