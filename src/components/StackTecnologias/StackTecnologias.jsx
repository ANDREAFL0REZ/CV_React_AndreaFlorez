// src/components/StackTecnologias/StackTecnologias.jsx
import "./StackTecnologias.css";

export default function StackTecnologias() {
  const tecnologias = [
    { id: 1, nombre: "React", tipo: "frontend" },
    { id: 2, nombre: "Node.js", tipo: "backend" },
    { id: 3, nombre: "JavaScript", tipo: "frontend" },
    { id: 4, nombre: "PostgreSQL", tipo: "base de datos" },
    { id: 5, nombre: "HTML5 / CSS3", tipo: "frontend" },
    { id: 6, nombre: "Git & GitHub", tipo: "control de versiones" }
  ];

  // Función que devuelve la clase CSS según el tipo
  const obtenerClaseColor = (tipo) => {
    switch (tipo) {
      case "frontend":
        return "color-blue";
      case "backend":
        return "color-green";
      case "base de datos":
        return "color-orange";
      default:
        return "color-gray";
    }
  };

  return (
    <section className="stack-tecnologias">
      <h3>Stack de Tecnologías</h3>
      <ul className="tech-list">
        {tecnologias.map((tech) => (
          <li key={tech.id} className={`tech-item ${obtenerClaseColor(tech.tipo)}`}>
            <span className="tech-nombre">{tech.nombre}</span>
            <span className="tech-tipo">— {tech.tipo}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}