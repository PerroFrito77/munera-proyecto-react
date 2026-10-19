import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import { useAuth } from '../context/AuthContext';

export default function VerificarMetodo() {
  const { user, verifyPaymentMethod } = useAuth();
  const navigate = useNavigate();
  const [code, setCode] = useState('');
  const [verifiedNotice, setVerifiedNotice] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (code.trim().length >= 4) {
      if (user.metodosPago[0]) {
        verifyPaymentMethod(user.metodosPago[0].id);
      }
      setVerifiedNotice(true);
      setTimeout(() => {
        navigate('/perfil/metodo-actual');
      }, 2000);
    } else {
      alert("Por favor ingresa un código válido de al menos 4 dígitos.");
    }
  };

  return (
    <>
      <Header title="Verificar Método de Pago" />
      <main>
        <div className="form-card" style={{ maxWidth: '500px', textAlign: 'center' }}>
          <div style={{ textAlign: 'left' }}>
            <Link to="/perfil/metodo-actual" className="volver">
              ‹ Volver a método actual
            </Link>
          </div>

          <h2>Verificación de Pago</h2>

          <img
            src="https://cdn-icons-png.flaticon.com/512/633/633611.png"
            alt="Verificación"
            style={{ width: '70px', height: '70px', margin: '15px auto', display: 'block' }}
          />

          <p className="subtitulo">
            Ingresa el código de verificación de 6 dígitos enviado por SMS o notificación a tu entidad bancaria.
          </p>

          {verifiedNotice && (
            <div className="alert-box alert-success">
              ✓ ¡Método de pago verificado exitosamente! Redirigiendo...
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div className="form-group" style={{ textAlign: 'left' }}>
              <label htmlFor="codigo">Código de verificación</label>
              <input
                type="text"
                id="codigo"
                placeholder="Ejemplo: 123456"
                maxLength={6}
                value={code}
                onChange={(e) => setCode(e.target.value)}
                style={{ textAlign: 'center', fontSize: '1.4rem', letterSpacing: '4px' }}
                required
              />
            </div>

            <button type="submit" className="btn-primary" style={{ marginTop: '10px' }}>
              Verificar
            </button>

            <button
              type="button"
              className="btn-secondary"
              onClick={() => navigate('/perfil/metodo-actual')}
            >
              Volver
            </button>
          </form>
        </div>
      </main>
    </>
  );
}
