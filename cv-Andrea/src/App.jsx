import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import HeaderCV from './components/HeaderCV/headerCV'; // 👈 importa el componente

function App() {
  const [count, setCount] = useState(0);

  const contacto = {
    telefono: "+57 300 0000000",
    email: "correo@ejemplo.com",
    ciudad: "Medellín"
  };

  return (
    <>
      {/* 🔹 Tu componente personalizado */}
      <HeaderCV
        nombre="Andrea Florez"
        titulo="Desarrolladora Frontend"
        contacto={contacto}
      />

      <div>
        <a href="https://vite.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <h1>Vite + React</h1>

      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edita <code>src/App.jsx</code> y guarda para probar HMR
        </p>
      </div>

      <p className="read-the-docs">
        Click en los logos para aprender más
      </p>
    </>
  );
}

export default App;
