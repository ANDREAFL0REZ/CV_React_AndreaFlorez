

export default function Education({ items }) {
  const education = items || [
    {
      titulo: "Técnico en Análisis y Desarrollo de Software",
      institucion: "SENA",
      anio: "2023  - en curso",
      descripcion: "Formación técnica en desarrollo de software con enfoque en frontend, metodologías ágiles, diseño UX/UI, control de versiones con Git y buenas prácticas de programación."
    },
    {
      titulo: "Bachiller Académico",
      institucion: "Institución Educativa Rural Ovejas",
      anio: "2018 - 2023",
      descripcion: "Formación secundaria completa con énfasis en ciencias y desarrollo personal en un entorno rural."
    },
    {
      titulo: "Desarrollo Web de Cero a Master",
      institucion: "Udemy",
      anio: "2024",
      descripcion: "Curso integral que cubre HTML5, CSS3, JavaScript moderno, React, herramientas de desarrollo y despliegue. Enfocado en construir aplicaciones web reales y profesionales."
    }
  ];

  return (
    <section className="educacion">
      <h3>Educación</h3>
      {education.map((est, idx) => (
        <article key={idx} className="edu-item">
          <div className="edu-header">
            <h4>{est.titulo}</h4>
            <span className="institucion">{est.institucion}</span>
          </div>
          <div className="edu-meta">
            <span className="anio">{est.anio}</span>
          </div>
          <p>{est.descripcion}</p>
        </article>
      ))}
    </section>
  );
}