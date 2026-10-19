import React from 'react';

export default function Header({ title = "Bienvenido a TURTLE INC" }) {
  return (
    <header className="site-header">
      <h1>{title}</h1>
    </header>
  );
}
