import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import { useAuth } from '../context/AuthContext';

export default function MetodoActual() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const currentCard = user.metodosPago[0];

  return (
    <>
      <Header title="Método de Pago" />
      <main>
        <div className="form-card" style={{ maxWidth: '550px' }}>
          <Link to="/perfil" className="volver">
            ‹ Volver al perfil
          </Link>

          <h2>Método de Pago Actual</h2>

          {currentCard ? (
            <div style={{ background: '#f5f5f5', borderRadius: '14px', padding: '20px', margin: '20px 0', display: 'flex', gap: '20px', alignItems: 'center' }}>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGNGdbqsun1jR_HaStAiMjCxRHj68WLGTl3-_5574erg&s=10"
                alt={currentCard.tipo}
                style={{ width: '80px', height: '60px', objectFit: 'contain', background: 'white', borderRadius: '8px', padding: '5px' }}
              />

              <div style={{ fontFamily: 'Poppins', fontSize: '14px', color: '#444' }}>
                <p style={{ margin: '4px 0' }}><strong>Tipo:</strong> {currentCard.tipo}</p>
                <p style={{ margin: '4px 0' }}><strong>Titular:</strong> {currentCard.titular}</p>
                <p style={{ margin: '4px 0' }}><strong>Número:</strong> {currentCard.numero}</p>
                <p style={{ margin: '4px 0' }}><strong>Vence:</strong> {currentCard.vence}</p>
                <p style={{ margin: '4px 0' }}>
                  <strong>Estado: </strong>
                  {currentCard.verificado ? (
                    <span style={{ color: '#2e8b57', fontWeight: 'bold' }}>✓ Verificada</span>
                  ) : (
                    <span style={{ color: '#ff9800', fontWeight: 'bold' }}>Pendiente de verificación</span>
                  )}
                </p>
              </div>
            </div>
          ) : (
            <div className="alert-box alert-warning" style={{ textAlign: 'center' }}>
              No tienes ningún método de pago registrado actualmente.
            </div>
          )}

          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '20px' }}>
            <button
              type="button"
              className="btn-primary"
              onClick={() => navigate('/perfil/verificar')}
            >
              Verificar tarjeta
            </button>

            <button
              type="button"
              className="btn-danger"
              onClick={() => navigate('/perfil/eliminar-metodo')}
            >
              Eliminar tarjeta
            </button>

            <button
              type="button"
              className="btn-secondary"
              onClick={() => navigate('/perfil/ingresar-tarjeta')}
            >
              Agregar nueva tarjeta
            </button>
          </div>
        </div>
      </main>
    </>
  );
}
