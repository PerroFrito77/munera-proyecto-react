import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import { useCart } from '../context/CartContext';
import { useOrder } from '../context/OrderContext';

export default function PagoDirecto() {
  const { items, totalFormatted, clearCart } = useCart();
  const { saveOrder } = useOrder();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    tarjeta: '',
    titular: '',
    direccion: '',
    celular: ''
  });
  const [pagado, setPagado] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    saveOrder({
      direccion: formData.direccion,
      telefono: formData.celular,
      seguimiento: 'si'
    });
    setPagado(true);
    setTimeout(() => {
      clearCart();
      navigate('/seguimiento');
    }, 2500);
  };

  return (
    <>
      <Header title="Pago | TURTLE INC" />
      <main style={{ maxWidth: '900px', margin: '30px auto', padding: '0 20px' }}>
        <div style={{ textAlign: 'left', marginBottom: '15px' }}>
          <Link to="/carrito" className="volver">‹ Volver al carrito</Link>
        </div>

        <div style={{ display: 'flex', gap: '30px', flexWrap: 'wrap' }}>
          {/* COLUMNA PRODUCTO */}
          <div style={{ flex: '1', minWidth: '300px', background: 'white', padding: '25px', borderRadius: '16px', boxShadow: '0 4px 15px rgba(0,0,0,0.08)', textAlign: 'center' }}>
            <img
              src="/imagenes/camisa h (2).png"
              alt="Camiseta Oversize"
              style={{ width: '100%', height: '220px', objectFit: 'contain', background: '#f9f9f9', borderRadius: '12px', marginBottom: '15px' }}
            />
            <h2 style={{ fontSize: '1.4rem', color: '#222', margin: '0 0 10px' }}>
              {items[0]?.name || "Camiseta Oversize Turtle Inc"}
            </h2>
            <p style={{ margin: '4px 0', color: '#666', fontFamily: 'Poppins' }}>Color: Negro</p>
            <p style={{ margin: '4px 0', color: '#666', fontFamily: 'Poppins' }}>Talla: {items[0]?.size || "M"}</p>
            <div style={{ fontSize: '1.5rem', color: '#2e8b57', fontWeight: 'bold', margin: '15px 0' }}>
              Total: <span>{totalFormatted}</span>
            </div>
          </div>

          {/* COLUMNA PAGO */}
          <div style={{ flex: '1.2', minWidth: '320px', background: 'white', padding: '25px', borderRadius: '16px', boxShadow: '0 4px 15px rgba(0,0,0,0.08)', textAlign: 'left' }}>
            <h2 style={{ color: '#2e8b57', fontSize: '1.5rem', marginTop: 0, textAlign: 'center' }}>Información de Pago</h2>

            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Número de tarjeta</label>
                <input
                  type="text"
                  placeholder="1234 5678 9012 3456"
                  value={formData.tarjeta}
                  onChange={(e) => setFormData(prev => ({ ...prev, tarjeta: e.target.value }))}
                  required
                />
              </div>

              <div className="form-group">
                <label>Nombre del titular</label>
                <input
                  type="text"
                  placeholder="Nombre completo"
                  value={formData.titular}
                  onChange={(e) => setFormData(prev => ({ ...prev, titular: e.target.value }))}
                  required
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Dirección</label>
                  <input
                    type="text"
                    placeholder="Ej: Cra 82 # 9A sur 79"
                    value={formData.direccion}
                    onChange={(e) => setFormData(prev => ({ ...prev, direccion: e.target.value }))}
                    required
                  />
                </div>

                <div className="form-group">
                  <label>Número de celular</label>
                  <input
                    type="tel"
                    placeholder="300 123 4567"
                    value={formData.celular}
                    onChange={(e) => setFormData(prev => ({ ...prev, celular: e.target.value }))}
                    required
                  />
                </div>
              </div>

              <button type="submit" className="btn-primary" style={{ marginTop: '10px' }}>
                Confirmar Pago 💳
              </button>
            </form>

            {pagado && (
              <div className="alert-box alert-success" style={{ marginTop: '20px', textAlign: 'center', fontSize: '16px', fontWeight: 'bold' }}>
                ✅ ¡Compra realizada con éxito! Redirigiendo a seguimiento en vivo...
              </div>
            )}
          </div>
        </div>
      </main>
    </>
  );
}
