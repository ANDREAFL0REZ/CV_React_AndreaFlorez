import "./profile.css";

export default function Profile() {
  const descripcionPerfil =
    "Estudiante de Análisis y Desarrollo de Software en el SENA, actualmente en el último trimestre de la etapa lectiva. Apasionada por la tecnología, el diseño de interfaces centradas en el usuario y el desarrollo de soluciones innovadoras que resuelvan problemas reales. Comprometida con el aprendizaje continuo, la colaboración y la calidad en cada fase del ciclo de desarrollo de software.";

  const habilidadesPerfil = [
    "Trabajo en equipo y comunicación asertiva",
    "Metodologías ágiles (Scrum, Kanban)",
    "Desarrollo web con HTML, CSS y JavaScript",
    "Fundamentos de React y componentes reutilizables",
    "Diseño de interfaces con principios de UX/UI",
    "Gestión de versiones con Git y GitHub",
    "Análisis de requisitos y documentación técnica",
    "Resolución de problemas y pensamiento lógico",
    "Pruebas de usabilidad y accesibilidad",
    "Capacidad de adaptación y aprendizaje autónomo"
  ];

  return (
    <section className="perfil">
      <h3>Perfil</h3>
      <p>{descripcionPerfil}</p>
      <h4>Habilidades</h4>
      <ul>
        {habilidadesPerfil.map((habilidad, index) => (
          <li key={index}>{habilidad}</li>
        ))}
      </ul>
    </section>
  );
}
