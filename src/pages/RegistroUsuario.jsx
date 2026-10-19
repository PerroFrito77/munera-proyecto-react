import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import { useAuth } from '../context/AuthContext';

export default function RegistroUsuario() {
  const { updateUser } = useAuth();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    correo: '',
    telefono: '',
    fecha: '',
    password: '',
    confirmar: '',
    terminos: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmar) {
      alert("Las contraseñas no coinciden.");
      return;
    }
    if (!formData.terminos) {
      alert("Debes aceptar los términos y condiciones.");
      return;
    }

    updateUser({
      nombre: `${formData.nombre} ${formData.apellido}`.trim(),
      correo: formData.correo,
      telefono: formData.telefono
    });

    navigate('/perfil');
  };

  return (
    <>
      <Header title="Registrar usuario" />
      <main>
        <div className="form-card" style={{ maxWidth: '550px' }}>
          <h2>Crear cuenta</h2>
          <p className="subtitulo">Regístrate en Turtle Inc.</p>

          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="nombre">Nombre</label>
                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  placeholder="Ingresa tu nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="apellido">Apellido</label>
                <input
                  type="text"
                  id="apellido"
                  name="apellido"
                  placeholder="Ingresa tu apellido"
                  value={formData.apellido}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="correo">Correo electrónico</label>
              <input
                type="email"
                id="correo"
                name="correo"
                placeholder="correo@ejemplo.com"
                value={formData.correo}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="telefono">Teléfono</label>
                <input
                  type="tel"
                  id="telefono"
                  name="telefono"
                  placeholder="Ingresa tu teléfono"
                  value={formData.telefono}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="fecha">Fecha de nacimiento</label>
                <input
                  type="date"
                  id="fecha"
                  name="fecha"
                  value={formData.fecha}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="password">Contraseña</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Crea una contraseña"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="confirmar">Confirmar contraseña</label>
                <input
                  type="password"
                  id="confirmar"
                  name="confirmar"
                  placeholder="Repite tu contraseña"
                  value={formData.confirmar}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div style={{ margin: '15px 0', display: 'flex', alignItems: 'center', gap: '8px', fontFamily: 'Poppins' }}>
              <input
                type="checkbox"
                id="terminos"
                name="terminos"
                checked={formData.terminos}
                onChange={handleChange}
                required
              />
              <label htmlFor="terminos" style={{ cursor: 'pointer', margin: 0 }}>
                Acepto los términos y condiciones
              </label>
            </div>

            <button type="submit" className="btn-primary">
              Registrarme
            </button>
          </form>

          <p style={{ textAlign: 'center', marginTop: '20px', fontFamily: 'Poppins', fontSize: '0.9rem', color: '#666' }}>
            ¿Ya tienes una cuenta? <Link to="/login" style={{ color: '#2e8b57', fontWeight: 'bold' }}>Iniciar sesión</Link>
          </p>
        </div>
      </main>
    </>
  );
}
