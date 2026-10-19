import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Header from '../components/Header';

export default function NuevaPassword() {
  const navigate = useNavigate();
  const [password, setPassword] = useState('');
  const [confirmar, setConfirmar] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmar) {
      alert("Las contraseñas no coinciden.");
      return;
    }
    setSuccess(true);
    setTimeout(() => {
      navigate('/login');
    }, 2500);
  };

  return (
    <>
      <Header title="Nueva Contraseña" />
      <main>
        <div className="form-card" style={{ maxWidth: '450px' }}>
          <h2>Cambiar contraseña</h2>
          <p className="subtitulo">Ingresa y confirma tu nueva clave de acceso</p>

          {success && (
            <div className="alert-box alert-success" style={{ textAlign: 'center' }}>
              ✓ ¡Contraseña cambiada con éxito! Redirigiendo al inicio de sesión...
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="nueva">Nueva contraseña</label>
              <input
                type="password"
                id="nueva"
                placeholder="Nueva contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="confirmar">Confirmar contraseña</label>
              <input
                type="password"
                id="confirmar"
                placeholder="Repite la contraseña"
                value={confirmar}
                onChange={(e) => setConfirmar(e.target.value)}
                required
              />
            </div>

            <button type="submit" className="btn-primary" style={{ marginTop: '10px' }}>
              Guardar Contraseña
            </button>
          </form>

          <div style={{ textAlign: 'center', marginTop: '20px', fontFamily: 'Poppins' }}>
            <Link to="/login" style={{ color: '#2e8b57', fontSize: '0.9rem' }}>
              Cancelar y volver al inicio
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
