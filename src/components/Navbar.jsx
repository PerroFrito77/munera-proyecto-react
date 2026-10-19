import React, { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

export default function Navbar() {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();
  const { totalCount } = useCart();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/buscar?q=${encodeURIComponent(searchTerm.trim())}`);
    }
  };

  return (
    <nav className="navbar">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <span>🐢</span> TURTLE INC
        </Link>

        <form className="busqueda" onSubmit={handleSearch}>
          <input
            type="text"
            id="buscar"
            placeholder="Buscar..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button type="submit" title="Buscar">🐢</button>
        </form>

        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink
              to="/ultimos-drops"
              className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
            >
              Ultimos drops
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/caparazones"
              className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
            >
              Caparazones
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/prendas"
              className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
            >
              Prendas
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/perfil"
              className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
            >
              Perfil
            </NavLink>
          </li>
          <li className="nav-item">
            <Link to="/carrito" className="boton-carrito" title="Carrito de compras">
              🛒
              {totalCount > 0 && <span className="carrito-badge">{totalCount}</span>}
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
