export default function TechStack({ items }) {
  const technologies = items || [
    {
      name: "HTML5",
      gif: "https://media.giphy.com/media/XAxylRMCdpbEWUAvr8/giphy.gif",
      level: "Avanzado"
    },
    {
      name: "CSS3",
      gif: "https://media.giphy.com/media/fsEaZldNC8A1PJ3mwp/giphy.gif",
      level: "Avanzado"
    },
    {
      name: "JavaScript",
      gif: "https://media.giphy.com/media/ln7z2eWriiQAllfVcn/giphy.gif",
      level: "Intermedio"
    },
    {
      name: "React",
      gif: "https://media.giphy.com/media/eNAsjO55tPbgaor7ma/giphy.gif",
      level: "Intermedio"
    },
    {
      name: "Node.js",
      gif: "https://media.giphy.com/media/kdj0VtKLOcopR6P2FZ/giphy.gif",
      level: "Intermedio"
    },
    {
      name: "Git",
      gif: "https://media.giphy.com/media/kH1DBkPNyZPOk0BxrM/giphy.gif",
      level: "Intermedio"
    }
  ];

  return (
    <section className="tech-stack">
      <h3>Tecnologías</h3>
      <div className="tech-grid">
        {technologies.map((tech, idx) => (
          <article key={idx} className="tech-item">
            <div className="tech-gif">
              <img src={tech.gif} alt={`${tech.name} logo`} />
            </div>
            <h4>{tech.name}</h4>
            <span className="tech-level">{tech.level}</span>
          </article>
        ))}
      </div>
    </section>
  );
}