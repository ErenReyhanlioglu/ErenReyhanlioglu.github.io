import { Container } from "./styles";
import { ScrollAnimation } from "../ScrollAnimation/ScrollAnimation";
import { ProjectCard } from "./ProjectCard";
import { projects } from "../../data/projects";

export function Projects() {
  return (
    <Container id="projects">
      <h2>My Projects</h2>
      <div className="projects">
        {projects.map((project) => (
          <ScrollAnimation key={project.title} animateIn="flipInX">
            <ProjectCard project={project} />
          </ScrollAnimation>
        ))}
      </div>
    </Container>
  );
}
