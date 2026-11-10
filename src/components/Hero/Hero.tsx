import { Container } from "./styles";
import { ScrollAnimation } from "../ScrollAnimation/ScrollAnimation";
import { SocialLinks } from "../SocialLinks/SocialLinks";
import { profile } from "../../data/profile";
import illustration from "../../assets/illustration.svg";

export function Hero() {
  return (
    <Container id="home">
      <div className="hero-text">
        <ScrollAnimation animateIn="fadeInUp">
          <p>Hello, I'm</p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={200}>
          <h1>{profile.name}</h1>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={400}>
          <h3>{profile.role}</h3>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={600}>
          <p className="small-resume">{profile.tagline}</p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={800}>
          <a href="#contact" className="button">
            Contact
          </a>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={1000}>
          <SocialLinks />
        </ScrollAnimation>
      </div>
      <div className="hero-image">
        <ScrollAnimation animateIn="fadeInRight" delay={1000}>
          <img src={illustration} alt="" />
        </ScrollAnimation>
      </div>
    </Container>
  );
}
