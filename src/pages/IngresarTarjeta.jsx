import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import { useAuth } from '../context/AuthContext';

export default function IngresarTarjeta() {
  const { addPaymentMethod } = useAuth();
  const navigate = useNavigate();

  const [cardData, setCardData] = useState({
    numero: '',
    titular: '',
    vence: '',
    cvv: ''
  });
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!cardData.numero || !cardData.titular) {
      alert("Por favor completa los campos de número de tarjeta y titular.");
      return;
    }

    addPaymentMethod({
      numero: cardData.numero,
      titular: cardData.titular,
      vence: cardData.vence || '12/28',
      tipo: 'Tarjeta de Crédito / Débito'
    });

    setSuccess(true);
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
  };

  return (
    <>
      <Header title="Registrar Nueva Tarjeta" />
      <main>
        <div className="form-card" style={{ maxWidth: '580px', textAlign: 'center' }}>
          <div style={{ textAlign: 'left' }}>
            <Link to="/perfil" className="volver">
              ‹ Volver al perfil
            </Link>
          </div>

          <img
            src="https://m.media-amazon.com/images/I/81GC5kmCelL._AC_UY350_.jpg"
            alt="Tarjeta de pago"
            style={{ width: '180px', height: '110px', objectFit: 'contain', margin: '10px auto', display: 'block' }}
          />

          <h2>Agregar Nuevo Método de Pago</h2>
          <p className="subtitulo">
            Ingresa los datos de tu nueva tarjeta para continuar realizando tus compras de forma segura.
          </p>

          <form onSubmit={handleSubmit} style={{ textAlign: 'left' }}>
            <div className="form-group">
              <label>Número de tarjeta</label>
              <input
                type="text"
                placeholder="1234 5678 9012 3456"
                value={cardData.numero}
                onChange={(e) => setCardData(prev => ({ ...prev, numero: e.target.value }))}
                required
              />
            </div>

            <div className="form-group">
              <label>Nombre del titular</label>
              <input
                type="text"
                placeholder="Nombre completo tal como aparece en el plástico"
                value={cardData.titular}
                onChange={(e) => setCardData(prev => ({ ...prev, titular: e.target.value }))}
                required
              />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Fecha de vencimiento</label>
                <input
                  type="text"
                  placeholder="MM/AA"
                  maxLength={5}
                  value={cardData.vence}
                  onChange={(e) => setCardData(prev => ({ ...prev, vence: e.target.value }))}
                  required
                />
              </div>

              <div className="form-group">
                <label>CVV</label>
                <input
                  type="password"
                  placeholder="123"
                  maxLength={4}
                  value={cardData.cvv}
                  onChange={(e) => setCardData(prev => ({ ...prev, cvv: e.target.value }))}
                  required
                />
              </div>
            </div>

            <button type="submit" className="btn-primary" style={{ marginTop: '10px' }}>
              Guardar Tarjeta
            </button>

            <button
              type="button"
              className="btn-secondary"
              onClick={() => navigate('/perfil')}
            >
              Volver al Perfil
            </button>
          </form>

          {success && (
            <div style={{ marginTop: '25px', padding: '20px', background: '#e8f5e9', borderRadius: '14px', border: '2px solid #81c784' }}>
              <img
                src="https://cdn-icons-png.flaticon.com/512/845/845646.png"
                alt="Correcto"
                style={{ width: '45px', height: '45px', margin: '0 auto 10px', display: 'block' }}
              />
              <h3 style={{ color: '#2e7d32', margin: '0 0 5px 0', fontSize: '18px' }}>
                ¡Tu tarjeta ha sido guardada!
              </h3>
              <p style={{ margin: 0, color: '#444', fontFamily: 'Poppins', fontSize: '14px' }}>
                Tu nuevo método de pago fue registrado correctamente.
              </p>
              <button
                type="button"
                className="btn-primary"
                style={{ marginTop: '15px', padding: '10px 20px', fontSize: '1rem', width: 'auto' }}
                onClick={() => navigate('/perfil/metodo-actual')}
              >
                Ver Método Actual ➔
              </button>
            </div>
          )}
        </div>
      </main>
    </>
  );
}
