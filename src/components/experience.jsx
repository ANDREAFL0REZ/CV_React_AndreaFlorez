
export default function Experience({ items }) {
  // Si no se pasan datos desde App, usa estos por defecto
  const experiencias = items || [
    {
      cargo: "Desarrolladora Frontend Junior",
      empresa: "Proyecto Académico - SENA",
      anio: "2025",
      descripcion:
        "Desarrollo de interfaces responsivas utilizando React, HTML5 y CSS3. Implementación de principios de UX/UI y pruebas de accesibilidad conforme a estándares WCAG. Trabajo colaborativo bajo metodología Scrum."
    },
    {
      cargo: "Asistente en Desarrollo de Software",
      empresa: "Prácticas Técnicas - Empresa Local",
      anio: "2024",
      descripcion:
        "Apoyo en la documentación de requisitos, análisis funcional y pruebas de usuario. Participación en reuniones de refinamiento y retrospectivas ágiles. Uso de Git para control de versiones."
    }
  ];

  // Renderizado condicional si no hay experiencias
  if (experiencias.length === 0) {
    return (
      <section className="experiencia">
        <h3>Experiencia Profesional</h3>
        <p>No se ha registrado experiencia profesional.</p>
      </section>
    );
  }

  return (
    <section className="experiencia">
      <h3>Experiencia Profesional</h3>
      {experiencias.map((exp, idx) => (
        <article key={idx} className="exp-item">
          <div className="exp-header">
            <h4>{exp.cargo}</h4>
            <span className="empresa">{exp.empresa}</span>
          </div>
          <div className="exp-meta">
            <span className="anio">{exp.anio}</span>
          </div>
          <p>{exp.descripcion}</p>
        </article>
      ))}
    </section>
  );
}
