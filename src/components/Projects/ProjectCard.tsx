import type { Project } from "../../data/types";
import githubIcon from "../../assets/icons/social/github.svg";
import externalLink from "../../assets/icons/social/external-link.svg";

const isGitHub = (href: string) => new URL(href).hostname === "github.com";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="project">
      <header>
        <svg width="50" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
        </svg>
        <div className="project-links">
          {project.links.map((link) => (
            <a key={link.href} href={link.href} target="_blank" rel="noreferrer" aria-label={`${project.title}: ${link.label}`} title={link.label}>
              <img src={isGitHub(link.href) ? githubIcon : externalLink} alt="" />
            </a>
          ))}
        </div>
      </header>
      <div className="body">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
      </div>
      <footer>
        <ul className="tech-list" aria-label="Tech stack">
          {project.tech.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
      </footer>
    </article>
  );
}
