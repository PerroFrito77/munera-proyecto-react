import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import { useAuth } from '../context/AuthContext';

export default function EliminarMetodo() {
  const { user, removePaymentMethod } = useAuth();
  const navigate = useNavigate();
  const currentCard = user.metodosPago[0];

  const handleEliminar = () => {
    if (currentCard) {
      removePaymentMethod(currentCard.id);
    }
    navigate('/perfil/ingresar-tarjeta');
  };

  return (
    <>
      <Header title="Eliminar Método de Pago" />
      <main>
        <div className="form-card" style={{ maxWidth: '580px', textAlign: 'center' }}>
          <div style={{ textAlign: 'left' }}>
            <Link to="/perfil/metodo-actual" className="volver">
              ‹ Volver a métodos de pago
            </Link>
          </div>

          <img
            src="https://www.elpais.com.co/resizer/v2/IHQWMUXY2JCZBFPNHJ25HBMMOI.jpg?auth=d44315b6366fbec9ecec981ac4bcf171caace9840e13014765ef557bb9c91e66&smart=true&quality=75&width=1280&height=720"
            alt="Tarjeta"
            style={{ width: '220px', height: '130px', objectFit: 'cover', borderRadius: '12px', margin: '15px auto', display: 'block' }}
          />

          <h2>¿Deseas eliminar este método de pago?</h2>
          <p className="subtitulo">
            Al eliminar este método de pago ya no podrás utilizarlo para realizar compras en la plataforma.
          </p>

          {currentCard && (
            <div style={{ background: '#f5f5f5', borderRadius: '12px', padding: '16px', margin: '20px 0', textAlign: 'left', fontFamily: 'Poppins', fontSize: '14px' }}>
              <h3 style={{ margin: '0 0 10px 0', color: '#222', fontFamily: 'Luckiest Guy' }}>Tarjeta registrada</h3>
              <p style={{ margin: '4px 0' }}><strong>Tipo:</strong> {currentCard.tipo}</p>
              <p style={{ margin: '4px 0' }}><strong>Número:</strong> {currentCard.numero}</p>
              <p style={{ margin: '4px 0' }}><strong>Propietario:</strong> {currentCard.titular}</p>
            </div>
          )}

          <div className="alert-box alert-warning" style={{ textAlign: 'center' }}>
            ⚠ Esta acción no se puede deshacer.
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <button
              type="button"
              className="btn-danger"
              onClick={handleEliminar}
            >
              Eliminar Método
            </button>

            <button
              type="button"
              className="btn-secondary"
              onClick={() => navigate('/perfil')}
            >
              Cancelar
            </button>
          </div>
        </div>
      </main>
    </>
  );
}
