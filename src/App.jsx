import React from 'react';
import { BrowserRouter, Routes, Route, Navigate, useParams } from 'react-router-dom';

// Providers
import { AuthProvider } from './context/AuthContext';
import { CartProvider } from './context/CartContext';
import { OrderProvider } from './context/OrderContext';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import Prendas from './pages/Prendas';
import PrendasMasculinas from './pages/PrendasMasculinas';
import PrendasFemeninas from './pages/PrendasFemeninas';
import ProductDetail from './pages/ProductDetail';
import UltimosDrops from './pages/UltimosDrops';
import Caparazones from './pages/Caparazones';
import CaparazonesCanje from './pages/CaparazonesCanje';
import Carrito from './pages/Carrito';
import Pedido from './pages/Pedido';
import Seguimiento from './pages/Seguimiento';
import MedidasHombre from './pages/MedidasHombre';
import MedidasMujer from './pages/MedidasMujer';
import Perfil from './pages/Perfil';
import MetodoActual from './pages/MetodoActual';
import IngresarTarjeta from './pages/IngresarTarjeta';
import EliminarMetodo from './pages/EliminarMetodo';
import VerificarMetodo from './pages/VerificarMetodo';
import PagoDirecto from './pages/PagoDirecto';
import Login from './pages/Login';
import RegistroUsuario from './pages/RegistroUsuario';
import OlvidastePassword from './pages/OlvidastePassword';
import NuevaPassword from './pages/NuevaPassword';
import SearchResults from './pages/SearchResults';

// Legacy .html redirect helper for individual product pages
function ProductHtmlRedirect() {
  const { filename } = useParams();
  const slug = filename.replace(/\.html$/i, '');
  return <Navigate to={`/producto/${slug}`} replace />;
}

export default function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <OrderProvider>
          <BrowserRouter>
            <Navbar />
            <Routes>
              {/* Rutas Principales */}
              <Route path="/" element={<Home />} />
              <Route path="/prendas" element={<Prendas />} />
              <Route path="/prendas/masculinas" element={<PrendasMasculinas />} />
              <Route path="/prendas/femeninas" element={<PrendasFemeninas />} />
              <Route path="/producto/:slug" element={<ProductDetail />} />
              <Route path="/ultimos-drops" element={<UltimosDrops />} />
              <Route path="/caparazones" element={<Caparazones />} />
              <Route path="/caparazones/canjear" element={<CaparazonesCanje />} />
              <Route path="/carrito" element={<Carrito />} />
              <Route path="/pedido" element={<Pedido />} />
              <Route path="/seguimiento" element={<Seguimiento />} />
              <Route path="/medidas/hombre" element={<MedidasHombre />} />
              <Route path="/medidas/mujer" element={<MedidasMujer />} />
              <Route path="/perfil" element={<Perfil />} />
              <Route path="/perfil/metodo-actual" element={<MetodoActual />} />
              <Route path="/perfil/ingresar-tarjeta" element={<IngresarTarjeta />} />
              <Route path="/perfil/eliminar-metodo" element={<EliminarMetodo />} />
              <Route path="/perfil/verificar" element={<VerificarMetodo />} />
              <Route path="/pago" element={<PagoDirecto />} />
              <Route path="/login" element={<Login />} />
              <Route path="/registro-usuario" element={<RegistroUsuario />} />
              <Route path="/olvidaste-password" element={<OlvidastePassword />} />
              <Route path="/nueva-password" element={<NuevaPassword />} />
              <Route path="/buscar" element={<SearchResults />} />

              {/* Redirecciones de compatibilidad hacia URLs de html-referencia */}
              <Route path="/inicio.html" element={<Navigate to="/" replace />} />
              <Route path="/prendas.html" element={<Navigate to="/prendas" replace />} />
              <Route path="/prendasmasculinas.html" element={<Navigate to="/prendas/masculinas" replace />} />
              <Route path="/prendasfemeninas.html" element={<Navigate to="/prendas/femeninas" replace />} />
              <Route path="/ultimos-drops.html" element={<Navigate to="/ultimos-drops" replace />} />
              <Route path="/caparazones.html" element={<Navigate to="/caparazones" replace />} />
              <Route path="/caparazones2.html" element={<Navigate to="/caparazones/canjear" replace />} />
              <Route path="/carritotortugo.html" element={<Navigate to="/carrito" replace />} />
              <Route path="/carrito.html" element={<Navigate to="/carrito" replace />} />
              <Route path="/pedido.html" element={<Navigate to="/pedido" replace />} />
              <Route path="/seguimiento.html" element={<Navigate to="/seguimiento" replace />} />
              <Route path="/medidashombre.html" element={<Navigate to="/medidas/hombre" replace />} />
              <Route path="/medidasmujeres.html" element={<Navigate to="/medidas/mujer" replace />} />
              <Route path="/perfil.html" element={<Navigate to="/perfil" replace />} />
              <Route path="/metodo-actual.html" element={<Navigate to="/perfil/metodo-actual" replace />} />
              <Route path="/ingresar-tarjeta.html" element={<Navigate to="/perfil/ingresar-tarjeta" replace />} />
              <Route path="/eliminar-metodo.html" element={<Navigate to="/perfil/eliminar-metodo" replace />} />
              <Route path="/verificar.html" element={<Navigate to="/perfil/verificar" replace />} />
              <Route path="/pago.html" element={<Navigate to="/pago" replace />} />
              <Route path="/registro.html" element={<Navigate to="/login" replace />} />
              <Route path="/registrousuario.html" element={<Navigate to="/registro-usuario" replace />} />

              {/* Redirección para cualquier archivo .html individual de producto */}
              <Route path="/:filename.html" element={<ProductHtmlRedirect />} />

              {/* Ruta fallback 404 */}
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
            <Footer />
          </BrowserRouter>
        </OrderProvider>
      </CartProvider>
    </AuthProvider>
  );
}
