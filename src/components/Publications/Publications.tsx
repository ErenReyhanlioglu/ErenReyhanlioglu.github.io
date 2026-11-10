import { Container } from "./styles";
import { ScrollAnimation } from "../ScrollAnimation/ScrollAnimation";
import { profile } from "../../data/profile";
import { publications } from "../../data/publications";
import externalLink from "../../assets/icons/social/external-link.svg";

export function Publications() {
  return (
    <Container id="publications">
      <h2>Publications</h2>
      <div className="publications">
        {publications.map((pub) => (
          <ScrollAnimation key={pub.title} animateIn="fadeInUp">
            <article className="publication">
              <p className="venue">{pub.venue}</p>
              <h3>{pub.title}</h3>
              <p className="authors">
                {pub.authors.map((author, i) => (
                  <span key={author}>
                    {i > 0 && ", "}
                    {author === pub.self ? <strong>{author}</strong> : author}
                  </span>
                ))}
              </p>
              <p className="source">{pub.source}</p>
              {pub.links.length > 0 && (
                <ul className="links">
                  {pub.links.map((link) => (
                    <li key={link.href}>
                      <a href={link.href} target="_blank" rel="noreferrer">
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </article>
          </ScrollAnimation>
        ))}
      </div>
      <a className="scholar" href={profile.socials.scholar} target="_blank" rel="noreferrer">
        Google Scholar <img src={externalLink} alt="" />
      </a>
    </Container>
  );
}
