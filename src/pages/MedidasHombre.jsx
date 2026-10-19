import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Header from '../components/Header';

export default function MedidasHombre() {
  const navigate = useNavigate();

  return (
    <>
      <Header title="Medidas Hombre" />
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
          <h2>GUÍA DE MEDIDAS MASCULINAS</h2>

          <div className="imagen-guia">
            <img src="/imagenes/medidas.PNG" alt="Guía de medidas hombre" />
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
                <td>56.5</td>
                <td>21</td>
                <td>73</td>
                <td>19.5</td>
              </tr>
              <tr>
                <td><strong>M</strong></td>
                <td>58.5</td>
                <td>22</td>
                <td>75</td>
                <td>20.5</td>
              </tr>
              <tr>
                <td><strong>L</strong></td>
                <td>60.5</td>
                <td>23</td>
                <td>77</td>
                <td>20.5</td>
              </tr>
              <tr>
                <td><strong>XL</strong></td>
                <td>62.5</td>
                <td>23.5</td>
                <td>79</td>
                <td>21.5</td>
              </tr>
            </tbody>
          </table>

          <div style={{ marginTop: '30px', textAlign: 'center' }}>
            <Link to="/medidas/mujer" style={{ color: '#2e8b57', fontFamily: 'Poppins', textDecoration: 'underline' }}>
              ¿Buscas la guía de medidas femenina? Haz clic aquí
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
