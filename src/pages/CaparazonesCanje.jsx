import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import { rewardsList } from '../data/products';
import { useAuth } from '../context/AuthContext';

export default function CaparazonesCanje() {
  const { user, redeemPoints } = useAuth();
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedReward, setSelectedReward] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  const handleCanjear = (reward) => {
    if (user.caparazones >= reward.cost) {
      redeemPoints(reward.cost);
      setSelectedReward(reward);
      setErrorMessage('');
      setModalOpen(true);
    } else {
      setErrorMessage(`Necesitas ${reward.cost} caparazones para este descuento. Tienes ${user.caparazones}.`);
      setTimeout(() => setErrorMessage(''), 4000);
    }
  };

  return (
    <>
      <Header title="Caparazones" />
      <main style={{ maxWidth: '1000px', margin: '0 auto', padding: '30px 20px' }}>
        <div style={{ textAlign: 'left', marginBottom: '15px' }}>
          <Link to="/caparazones" className="volver">‹ Volver a información</Link>
        </div>

        <h1>Bienvenido a Caparazones</h1>
        <div style={{ maxWidth: '700px', margin: '0 auto 20px', fontFamily: 'Poppins', color: '#555' }}>
          <p>Los Caparazones son el sistema de recompensas de Turtle Inc.</p>
          <p>Cada compra suma puntos que podrás cambiar por descuentos exclusivos.</p>
          <p>
            <strong>Tus puntos actuales: </strong>
            <span style={{ color: '#2e8b57', fontSize: '1.2rem', fontWeight: 'bold' }}>
              {user.caparazones} 🐢
            </span>
          </p>
        </div>

        {errorMessage && (
          <div className="alert-box alert-warning" style={{ maxWidth: '600px', margin: '15px auto', textAlign: 'center' }}>
            {errorMessage}
          </div>
        )}

        <h1 style={{ marginTop: '40px' }}>RECOMPENSAS</h1>

        <div className="recompensas-grid">
          {rewardsList.map((reward) => (
            <div key={reward.id} className="recompensa-card">
              <h2>{reward.discount}</h2>
              <h3>{reward.label}</h3>
              <button
                type="button"
                className="btn-canjear"
                onClick={() => handleCanjear(reward)}
              >
                Canjear
              </button>
            </div>
          ))}
        </div>

        {/* MODAL DE CANJE */}
        {modalOpen && (
          <div className="modal-overlay" onClick={() => setModalOpen(false)}>
            <div className="modal-contenido" onClick={(e) => e.stopPropagation()}>
              <div className="modal-icono">
                <span>✓</span>
              </div>
              <span className="modal-subtitulo">TURTLE INC</span>
              <h2 className="modal-titulo">¡Caparazones canjeados!</h2>
              <p className="modal-texto">
                Has canjeado con éxito tu bono de <strong>{selectedReward?.discount}</strong> por {selectedReward?.cost} caparazones.<br />
                <strong>Turtle Inc 🐢</strong>
              </p>
              <button
                type="button"
                className="btn-aceptar"
                onClick={() => setModalOpen(false)}
              >
                Aceptar
              </button>
            </div>
          </div>
        )}
      </main>
    </>
  );
}
