import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import HeaderCV from './components/headerCV.jsx'; 
import Profile from './components/profile.jsx';
import Experience from './components/experience.jsx';
import Education from './components/education.jsx';
import StackTecnologias from "./components/StackTecnologias.jsx";
import UserCard from './components/UserCard.jsx';

const usuarios = [
  {
    id: 1,
    name: "Carlos Navia",
    email: "carlos@example.com",
    avatar: "https://i.pravatar.cc/150?img=1"
  },
  {
    id: 2,
    name: "Laura Gómez",
    email: "laura@example.com",
    avatar: "https://i.pravatar.cc/150?img=2"
  },
  {
    id: 3,
    name: "Julián Pérez",
    email: "julian@example.com",
    avatar: "https://i.pravatar.cc/150?img=3"
  }
];

function App() {
  const contacto = {
    telefono: "+57 300 0000000",
    email: "correo@ejemplo.com",
    ciudad: "Medellín"
  };
  const descripcionPerfil = "Estudiante de Análisis y Desarrollo de Software en el SENA, en el último trimestre de la etapa lectiva. Apasionada por el desarrollo frontend, la usabilidad y la creación de experiencias digitales accesibles e inclusivas.";

  const habilidadesPerfil = [
    "Trabajo en equipo y comunicación asertiva",
    "Metodologías ágiles (Scrum, Kanban)",
    "HTML5, CSS3 y JavaScript (ES6+)",
    "Fundamentos de React y componentes reutilizables",
    "Diseño responsivo y principios de UX/UI",
    "Control de versiones con Git y GitHub",
    "Análisis de requerimientos y documentación técnica",
    "Resolución de problemas y pensamiento lógico",
    "Pruebas básicas de accesibilidad y usabilidad",
    "Capacidad de aprendizaje autónomo y adaptación rápida"
  ];


  return (
    <>
      
      <HeaderCV
        nombre="Andrea Florez"
        titulo="Desarrolladora Frontend"
        contacto={contacto}
      />
      <div style={{ textAlign: 'center', marginTop: '2rem' }}>
        <a href="https://vite.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <h1>Vite + React</h1>
      </div>

      <Profile 
        descripcion={descripcionPerfil} 
        habilidades={habilidadesPerfil} 
      />

      <Experience />
      <Education />
      <StackTecnologias />

      <div style={{ 
        display: "flex",
        gap: "20px",
        flexWrap: "wrap",
        justifyContent: "center",
        marginTop: "2rem"
      }}>
        {usuarios.map(user => (
          <UserCard 
            key={user.id}
            name={user.name}
            email={user.email}
            avatar={user.avatar}
          />
        ))}
      </div>
      
    </>
  );
}

export default App;