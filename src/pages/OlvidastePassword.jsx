import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Header from '../components/Header';

export default function OlvidastePassword() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [code, setCode] = useState('');
  const [codeSent, setCodeSent] = useState(false);

  const handleSendCode = (e) => {
    e.preventDefault();
    if (email) {
      setCodeSent(true);
    }
  };

  const handleNext = (e) => {
    e.preventDefault();
    if (!code) {
      alert("Por favor ingresa el código recibido.");
      return;
    }
    navigate('/nueva-password');
  };

  return (
    <>
      <Header title="Recuperar Contraseña" />
      <main>
        <div className="form-card" style={{ maxWidth: '450px' }}>
          <h2>¿Olvidaste tu contraseña?</h2>
          <p className="subtitulo">Te enviaremos un código de seguridad a tu correo para restablecer tu acceso.</p>

          <form onSubmit={handleSendCode}>
            <div className="form-group">
              <label htmlFor="email">Email registrado</label>
              <input
                type="email"
                id="email"
                placeholder="email@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <button type="submit" className="btn-secondary" style={{ width: '100%', marginBottom: '20px' }}>
              Enviar código
            </button>
          </form>

          {codeSent && (
            <div className="alert-box alert-success" style={{ textAlign: 'center' }}>
              ✓ Código de verificación enviado a {email} (Simulado: 123456)
            </div>
          )}

          <form onSubmit={handleNext}>
            <div className="form-group">
              <label htmlFor="code">Código de seguridad</label>
              <input
                type="text"
                id="code"
                placeholder="Ingresa el código"
                value={code}
                onChange={(e) => setCode(e.target.value)}
                required
              />
            </div>

            <button type="submit" className="btn-primary" style={{ marginTop: '10px' }}>
              Cambiar contraseña
            </button>
          </form>

          <div style={{ textAlign: 'center', marginTop: '20px', fontFamily: 'Poppins' }}>
            <Link to="/login" style={{ color: '#2e8b57', fontSize: '0.9rem' }}>
              ← Volver al inicio de sesión
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
