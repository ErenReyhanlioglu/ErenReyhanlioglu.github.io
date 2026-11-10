import { Container } from "./styles";
import { ScrollAnimation } from "../ScrollAnimation/ScrollAnimation";
import { profile } from "../../data/profile";
import { skills } from "../../data/skills";
import type { TimelineItem } from "../../data/types";

function Timeline({ heading, items, delay }: { heading: string; items: TimelineItem[]; delay: number }) {
  if (items.length === 0) return null;
  return (
    <ScrollAnimation animateIn="fadeInLeft" delay={delay}>
      <div className="timeline">
        <h3>{heading}:</h3>
        {items.map((item) => (
          <div className="timeline-item" key={`${item.title}-${item.place}`}>
            <h4>{item.title}</h4>
            <p>
              {item.place} | {item.period}
            </p>
            {item.detail && <p>{item.detail}</p>}
          </div>
        ))}
      </div>
    </ScrollAnimation>
  );
}

export function About() {
  return (
    <Container id="about" className={profile.photoUrl ? "" : "no-photo"}>
      {profile.photoUrl && (
        <div className="about-image">
          <ScrollAnimation animateIn="fadeInRight" delay={210}>
            <img src={profile.photoUrl} alt={profile.name} />
          </ScrollAnimation>
        </div>
      )}
      <div className="about-text">
        <ScrollAnimation animateIn="fadeInLeft">
          <h2>About me</h2>
        </ScrollAnimation>
        {profile.about.map((paragraph, i) => (
          <ScrollAnimation key={i} animateIn="fadeInLeft" delay={100 * (i + 1)} className="paragraph">
            <p>{paragraph}</p>
          </ScrollAnimation>
        ))}

        <Timeline heading="Education" items={profile.education} delay={400} />
        <Timeline heading="Experience" items={profile.experience} delay={550} />

        <ScrollAnimation animateIn="fadeInLeft" delay={400}>
          <h3>Here are my main skills:</h3>
        </ScrollAnimation>
        <ul className="hard-skills">
          {skills.map((skill, i) => (
            <li className="hability" key={skill.name}>
              <ScrollAnimation animateIn="fadeInUp" delay={100 + i * 10}>
                <img src={skill.icon} alt={skill.name} title={skill.name} />
              </ScrollAnimation>
            </li>
          ))}
        </ul>
      </div>
    </Container>
  );
}
