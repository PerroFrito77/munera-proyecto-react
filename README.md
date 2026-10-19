# TURTLE INC - Aplicación Web en React

Migración completa y profesional del sitio web original contenido en `html-referencia` hacia una arquitectura moderna basada en **React 19**, **Vite** y **React Router**.

---

## 🐢 Características Implementadas

1. **Catálogo Completo y Dinámico**:
   - 16 productos divididos entre colección masculina y femenina.
   - Vistas de detalle de producto con galería de imágenes en alta resolución, selector interactivo de tallas, beneficios, especificaciones y cuidados.
   - Adelantos exclusivos ("Últimos Drops") con etiquetas de disponibilidad.

2. **Búsqueda Global en Tiempo Real**:
   - Barra de búsqueda en la cabecera con botón `🐢` para filtrar por nombre, categoría, código o descripción.

3. **Carrito de Compras Reactivo**:
   - Incremento/decremento de cantidades en tiempo real.
   - Eliminación de productos.
   - Cálculo automático de subtotales y totales en moneda colombiana (`COP`).
   - Persistencia automática en `localStorage` (`carritoTurtle`).

4. **Flujo de Pago y Despacho**:
   - Formulario de pedido con dirección, teléfono, notas y preferencias de contacto.
   - Seguimiento en vivo simulado (`/seguimiento`) con mapa interactivo, pulso animado, estados de entrega y botón `"YA LLEGÓ MI PEDIDO"` con modal de celebración y limpieza del pedido.
   - Opción alternativa con modal informativo cuando el cliente no requiere seguimiento.

5. **Programa de Fidelización ("Caparazones")**:
   - Consulta de saldo de puntos.
   - 4 niveles de descuento canjeables (25%, 50%, 75% y 99%).
   - Modal de confirmación de canje con descuento en tiempo real de los puntos acumulados.

6. **Módulo de Usuario y Medios de Pago**:
   - Perfil de usuario editable.
   - Gestión de tarjetas: visualización de tarjeta actual, verificación por código de seguridad, adición de nueva tarjeta con validación y eliminación con advertencia.
   - Flujo de autenticación: Login, Registro de cuenta nueva y Recuperación de contraseña en 2 pasos.

7. **Guías de Medidas**:
   - Tablas detalladas de medidas y diagramas de confección para hombre y mujer.

---

## 🚀 Cómo Ejecutar el Proyecto

### 1. Iniciar el Servidor de Desarrollo
```bash
npm run dev
```
La aplicación se abrirá en `http://localhost:3000`.

### 2. Compilar para Producción
```bash
npm run build
```
Genera la versión optimizada en la carpeta `dist/`.

### 3. Previsualizar la Versión de Producción
```bash
npm run preview
```

---

## 📁 Estructura del Proyecto

```text
munera-proyecto-react/
├── html-referencia/         # Sitio original en HTML/CSS/JS (fuente de referencia)
├── public/
│   └── imagenes/            # 73 imágenes del catálogo y tablas de medidas
├── src/
│   ├── components/          # Header, Navbar (con buscador y badge), Footer
│   ├── context/             # AuthContext, CartContext, OrderContext
│   ├── data/                # products.js (catálogo estructurado y recompensas)
│   ├── pages/               # Vistas migradas de cada archivo HTML
│   │   ├── Home.jsx
│   │   ├── Prendas.jsx
│   │   ├── PrendasMasculinas.jsx
│   │   ├── PrendasFemeninas.jsx
│   │   ├── ProductDetail.jsx
│   │   ├── UltimosDrops.jsx
│   │   ├── Caparazones.jsx
│   │   ├── CaparazonesCanje.jsx
│   │   ├── Carrito.jsx
│   │   ├── Pedido.jsx
│   │   ├── Seguimiento.jsx
│   │   ├── MedidasHombre.jsx
│   │   ├── MedidasMujer.jsx
│   │   ├── Perfil.jsx
│   │   ├── MetodoActual.jsx
│   │   ├── IngresarTarjeta.jsx
│   │   ├── EliminarMetodo.jsx
│   │   ├── VerificarMetodo.jsx
│   │   ├── PagoDirecto.jsx
│   │   ├── Login.jsx
│   │   ├── RegistroUsuario.jsx
│   │   ├── OlvidastePassword.jsx
│   │   ├── NuevaPassword.jsx
│   │   └── SearchResults.jsx
│   ├── App.jsx              # Enrutador con rutas semánticas y redirecciones .html
│   ├── index.css            # Estilos globales y paleta oficial
│   └── main.jsx             # Punto de entrada de React
├── index.html               # Plantilla HTML con Google Fonts (Luckiest Guy & Poppins)
├── package.json
└── vite.config.js
```
