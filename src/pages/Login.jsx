import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import { useAuth } from '../context/AuthContext';

export default function Login() {
  const { updateUser } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      updateUser({ correo: email });
    }
    navigate('/perfil');
  };

  return (
    <>
      <Header title="Iniciar Sesión" />
      <main>
        <div className="form-card" style={{ maxWidth: '450px' }}>
          <h2>Registro / Iniciar Sesión</h2>
          <p className="subtitulo">Ingresa tus credenciales para acceder a tu cuenta Turtle</p>

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email">Email address</label>
              <input
                type="email"
                id="email"
                placeholder="email@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <div style={{ margin: '15px 0', display: 'flex', alignItems: 'center', gap: '8px', fontFamily: 'Poppins' }}>
              <input
                type="checkbox"
                id="dropdownCheck"
                checked={remember}
                onChange={(e) => setRemember(e.target.checked)}
              />
              <label htmlFor="dropdownCheck" style={{ cursor: 'pointer', margin: 0 }}>
                Remember me
              </label>
            </div>

            <button type="submit" className="btn-primary">
              Sign in
            </button>
          </form>

          <div style={{ marginTop: '25px', paddingTop: '20px', borderTop: '1px solid #eee', display: 'flex', flexDirection: 'column', gap: '10px', textAlign: 'center', fontFamily: 'Poppins', fontSize: '0.9rem' }}>
            <Link to="/registro-usuario" style={{ color: '#2e8b57' }}>
              ¿Eres nuevo por aquí? Crear cuenta
            </Link>
            <Link to="/olvidaste-password" style={{ color: '#888' }}>
              ¿Olvidaste tu contraseña?
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
