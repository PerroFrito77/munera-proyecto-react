import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import { useOrder } from '../context/OrderContext';
import { useCart } from '../context/CartContext';

export default function Pedido() {
  const { order, saveOrder } = useOrder();
  const { totalFormatted, items } = useCart();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    direccion: order.direccion || '',
    telefono: order.telefono || '',
    api: order.api || '',
    aviso: order.aviso || 'mensaje',
    seguimiento: order.seguimiento || 'si'
  });

  const [showNoTrackingModal, setShowNoTrackingModal] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.direccion.trim() || !formData.telefono.trim()) {
      alert("Por favor completa los campos de dirección y teléfono.");
      return;
    }

    saveOrder(formData);

    if (formData.seguimiento === 'si') {
      navigate('/seguimiento');
    } else {
      setShowNoTrackingModal(true);
    }
  };

  const handleCloseNoTracking = () => {
    setShowNoTrackingModal(false);
    navigate('/');
  };

  return (
    <>
      <Header title="Datos para el pedido" />
      <main>
        <div className="form-card" style={{ maxWidth: '650px' }}>
          <Link to="/carrito" className="volver">
            ‹ Volver al carrito
          </Link>

          <h2>Información de Entrega</h2>
          <p className="subtitulo">
            Completa tus datos para despachar tu pedido {items.length > 0 && `(${totalFormatted})`}
          </p>

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="direccion">Dirección de entrega *</label>
              <input
                type="text"
                id="direccion"
                name="direccion"
                placeholder="Ej: Carrera 43A # 1-50, Apto 302"
                value={formData.direccion}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="telefono">Teléfono de contacto *</label>
                <input
                  type="tel"
                  id="telefono"
                  name="telefono"
                  placeholder="Ej: 300 123 4567"
                  value={formData.telefono}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="api">Indicaciones adicionales</label>
                <input
                  type="text"
                  id="api"
                  name="api"
                  placeholder="Torre, interior, referencias..."
                  value={formData.api}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="form-group" style={{ margin: '20px 0' }}>
              <label style={{ marginBottom: '10px' }}>¿Cómo prefieres que te avisemos cuando llegue el domiciliario?</label>
              <div style={{ display: 'flex', gap: '20px', fontFamily: 'Poppins' }}>
                <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
                  <input
                    type="radio"
                    name="aviso"
                    value="mensaje"
                    checked={formData.aviso === 'mensaje'}
                    onChange={handleChange}
                  />
                  Mensaje de texto / WhatsApp
                </label>
                <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
                  <input
                    type="radio"
                    name="aviso"
                    value="llamada"
                    checked={formData.aviso === 'llamada'}
                    onChange={handleChange}
                  />
                  Llamada telefónica
                </label>
              </div>
            </div>

            <div className="form-group" style={{ margin: '20px 0' }}>
              <label style={{ marginBottom: '10px' }}>¿Deseas activar el seguimiento en tiempo real de tu entrega?</label>
              <div style={{ display: 'flex', gap: '25px', fontFamily: 'Poppins' }}>
                <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
                  <input
                    type="radio"
                    name="seguimiento"
                    value="si"
                    checked={formData.seguimiento === 'si'}
                    onChange={handleChange}
                  />
                  Sí, quiero ver el mapa y progreso en vivo 📍
                </label>
                <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
                  <input
                    type="radio"
                    name="seguimiento"
                    value="no"
                    checked={formData.seguimiento === 'no'}
                    onChange={handleChange}
                  />
                  No, solo notifíquenme al llegar
                </label>
              </div>
            </div>

            <button type="submit" className="btn-primary" style={{ marginTop: '15px' }}>
              Confirmar Pedido 🐢
            </button>
          </form>
        </div>

        {/* MODAL CUANDO NO DESEA SEGUIMIENTO */}
        {showNoTrackingModal && (
          <div className="modal-overlay">
            <div className="modal-contenido">
              <div className="modal-icono">
                <span>✓</span>
              </div>
              <span className="modal-subtitulo">TURTLE INC</span>
              <h2 className="modal-titulo">¡Pedido Recibido!</h2>
              <p className="modal-texto">
                Tu pedido ha sido procesado con éxito. Te avisaremos a tu teléfono <strong>{formData.telefono}</strong> mediante {formData.aviso} cuando el repartidor esté en tu puerta.<br />
                <strong>Turtle Inc 🐢</strong>
              </p>
              <button
                type="button"
                className="btn-aceptar"
                onClick={handleCloseNoTracking}
              >
                Volver a la tienda
              </button>
            </div>
          </div>
        )}
      </main>
    </>
  );
}
