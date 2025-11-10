import React from 'react';
import './headerCV.css';

export default function HeaderCV({ nombre, titulo, contacto }) {
  return (
    <header className="header-cv">
      <h1>{nombre}</h1>
      <h2>{titulo}</h2>
      <p className="contacto">
        {contacto.telefono} · {contacto.email} · {contacto.ciudad}
      </p>
    </header>
  );
}
