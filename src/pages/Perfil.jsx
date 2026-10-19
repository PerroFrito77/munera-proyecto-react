import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import { useAuth } from '../context/AuthContext';

export default function Perfil() {
  const { user, updateUser } = useAuth();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    nombre: user.nombre || '',
    correo: user.correo || '',
    telefono: user.telefono || ''
  });
  const [savedNotice, setSavedNotice] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateUser(formData);
    setSavedNotice(true);
    setTimeout(() => setSavedNotice(false), 3000);
  };

  return (
    <>
      <Header title="Perfil de Usuario" />
      <main>
        <div className="form-card" style={{ maxWidth: '600px', textAlign: 'center' }}>
          <h2>Información del Usuario</h2>

          <img
            src={user.avatar}
            alt="Avatar del usuario"
            style={{ width: '120px', height: '120px', borderRadius: '50%', objectFit: 'cover', margin: '15px auto', display: 'block', boxShadow: '0 4px 10px rgba(0,0,0,0.1)' }}
          />

          <h3 style={{ margin: '10px 0 20px', color: '#333' }}>Datos de usuario</h3>

          {savedNotice && (
            <div className="alert-box alert-success" style={{ textAlign: 'center' }}>
              ✓ Cambios guardados correctamente
            </div>
          )}

          <form onSubmit={handleSubmit} style={{ textAlign: 'left' }}>
            <div className="form-group">
              <label htmlFor="nombre">Nombre:</label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                placeholder="Escribe tu nombre"
                value={formData.nombre}
                onChange={(e) => setFormData(prev => ({ ...prev, nombre: e.target.value }))}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="correo">Correo electrónico:</label>
              <input
                type="email"
                id="correo"
                name="correo"
                placeholder="Escribe tu correo"
                value={formData.correo}
                onChange={(e) => setFormData(prev => ({ ...prev, correo: e.target.value }))}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="telefono">Teléfono:</label>
              <input
                type="tel"
                id="telefono"
                name="telefono"
                placeholder="Número de celular"
                value={formData.telefono}
                onChange={(e) => setFormData(prev => ({ ...prev, telefono: e.target.value }))}
              />
            </div>

            <button type="submit" className="btn-primary" style={{ marginTop: '10px' }}>
              Guardar Cambios
            </button>
          </form>

          <div style={{ marginTop: '30px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <button
              type="button"
              className="btn-secondary"
              onClick={() => navigate('/perfil/metodo-actual')}
            >
              💳 Método de pago actual
            </button>

            <button
              type="button"
              className="btn-secondary"
              onClick={() => navigate('/perfil/eliminar-metodo')}
            >
              🗑️ Eliminar método de pago
            </button>

            <button
              type="button"
              className="btn-secondary"
              onClick={() => navigate('/perfil/verificar')}
            >
              🔒 Verificar método de pago
            </button>

            <button
              type="button"
              className="btn-secondary"
              onClick={() => navigate('/perfil/ingresar-tarjeta')}
            >
              ➕ Agregar nueva tarjeta
            </button>
          </div>

          <div style={{ marginTop: '25px', paddingTop: '20px', borderTop: '1px solid #eee', display: 'flex', justifyContent: 'center', gap: '20px' }}>
            <Link to="/login" style={{ color: '#2e8b57', fontFamily: 'Poppins', fontSize: '0.9rem' }}>
              Iniciar con otra cuenta
            </Link>
            <Link to="/registro-usuario" style={{ color: '#2e8b57', fontFamily: 'Poppins', fontSize: '0.9rem' }}>
              Crear nueva cuenta
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
