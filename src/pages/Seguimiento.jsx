import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import { useOrder } from '../context/OrderContext';

export default function Seguimiento() {
  const { order, markAsDelivered, resetOrder } = useOrder();
  const navigate = useNavigate();

  const [showCelebration, setShowCelebration] = useState(false);

  const handleLlego = () => {
    markAsDelivered();
    setShowCelebration(true);
  };

  const handleCerrarCelebracion = () => {
    setShowCelebration(false);
    resetOrder();
    navigate('/');
  };

  return (
    <>
      <Header title="Seguimiento de tu pedido" />
      <main style={{ padding: '20px 10px' }}>
        <div className="telefono-mockup">
          <div className="barra-superior">
            <Link to="/pedido" style={{ color: '#2e8b57', textDecoration: 'none' }}>
              ‹ Back
            </Link>
            <span>9:41</span>
          </div>

          <div className="contenido-seguimiento">
            <div className="tortuga-icon">🐢</div>
            <p className="marca-mini">TURTLE INC</p>
            <h1 className="titulo-tracking">
              SEGUIMIENTO<br />DE TU PEDIDO
            </h1>

            {/* MAPA VISUAL */}
            <div className="mapa-tracking" aria-label="Mapa de seguimiento">
              <div className="ruta"></div>
              <div className="pin">📍</div>
            </div>

            {/* ESTADO EN VIVO */}
            <div className="estado-box">
              <span className={`pulso-indicador ${order.isDelivered ? 'completo' : ''}`}></span>
              <div>
                <strong style={{ display: 'block', fontSize: '15px', color: order.isDelivered ? '#299367' : '#222', fontFamily: 'Poppins' }}>
                  {order.isDelivered ? "¡Tu pedido ya llegó!" : "Tu pedido está en camino"}
                </strong>
                <small style={{ color: '#666', fontFamily: 'Poppins' }}>
                  {order.direccion ? `Entregando en: ${order.direccion}` : "Preparando la entrega..."}
                </small>
              </div>
            </div>

            {/* BARRA DE PROGRESO */}
            <div className="progreso-steps">
              <div className={`paso-track ${order.step >= 1 ? 'activo' : ''}`}>
                <div className="paso-circle">{order.step >= 1 ? '✓' : '1'}</div>
                <small>Pedido<br />confirmado</small>
              </div>

              <div className={`paso-track ${order.step >= 2 ? 'activo' : ''}`}>
                <div className="paso-circle">{order.step >= 2 ? '✓' : '2'}</div>
                <small>En camino</small>
              </div>

              <div className={`paso-track ${order.step >= 3 ? 'activo' : ''}`}>
                <div className="paso-circle">{order.step >= 3 ? '✓' : '3'}</div>
                <small>Entregado</small>
              </div>
            </div>

            {/* BOTÓN DE CONFIRMACIÓN */}
            <button
              type="button"
              className="btn-llego"
              onClick={handleLlego}
              disabled={order.isDelivered}
              style={{ opacity: order.isDelivered ? 0.7 : 1 }}
            >
              {order.isDelivered ? "¡PEDIDO ENTREGADO! ✓" : "YA LLEGÓ MI PEDIDO 🐢"}
            </button>

            <button
              type="button"
              className="btn-volver-subtle"
              onClick={() => navigate('/pedido')}
            >
              ← Volver a mis datos
            </button>
          </div>
        </div>

        {/* MODAL DE CELEBRACIÓN FINAL */}
        {showCelebration && (
          <div className="modal-overlay">
            <div className="modal-contenido">
              <div className="modal-icono">
                <span>✓</span>
              </div>
              <p className="modal-subtitulo">TURTLE INC</p>
              <h2 className="modal-titulo">¡Pedido entregado!</h2>
              <p className="modal-texto">
                Gracias por confiar en nosotros,<br />
                esperamos te guste tu pedido.<br />
                <strong>Turtle Inc 🐢</strong>
              </p>
              <button
                type="button"
                className="btn-aceptar"
                onClick={handleCerrarCelebracion}
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
