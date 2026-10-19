import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Header from '../components/Header';

export default function MedidasMujer() {
  const navigate = useNavigate();

  return (
    <>
      <Header title="Medidas Mujer" />
      <main>
        <div style={{ maxWidth: '800px', margin: '20px auto 0', padding: '0 20px', textAlign: 'left' }}>
          <button
            type="button"
            className="volver"
            style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
            onClick={() => navigate(-1)}
          >
            ‹ Volver
          </button>
        </div>

        <section className="guia-medidas">
          <h2>GUÍA DE MEDIDAS FEMENINAS</h2>

          <div className="imagen-guia">
            <img src="/imagenes/medidas.PNG" alt="Guía de medidas mujer" />
          </div>

          <table>
            <thead>
              <tr>
                <th>Talla</th>
                <th>Ancho Pecho (cm)</th>
                <th>Longitud Manga (cm)</th>
                <th>Longitud Frente (cm)</th>
                <th>Hombro (cm)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>S</strong></td>
                <td>35</td>
                <td>17</td>
                <td>38</td>
                <td>8.5</td>
              </tr>
              <tr>
                <td><strong>M</strong></td>
                <td>37</td>
                <td>18</td>
                <td>39.5</td>
                <td>9</td>
              </tr>
              <tr>
                <td><strong>L</strong></td>
                <td>39</td>
                <td>19</td>
                <td>41</td>
                <td>9.5</td>
              </tr>
              <tr>
                <td><strong>XL</strong></td>
                <td>41</td>
                <td>20</td>
                <td>43</td>
                <td>10</td>
              </tr>
            </tbody>
          </table>

          <div style={{ marginTop: '30px', textAlign: 'center' }}>
            <Link to="/medidas/hombre" style={{ color: '#2e8b57', fontFamily: 'Poppins', textDecoration: 'underline' }}>
              ¿Buscas la guía de medidas masculina? Haz clic aquí
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
