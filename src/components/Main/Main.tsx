import { Container } from "./styles";
import { ParticlesBackground } from "../ParticlesBackground/ParticlesBackground";
import { Hero } from "../Hero/Hero";
import { About } from "../About/About";
import { Projects } from "../Projects/Projects";
import { Publications } from "../Publications/Publications";
import { Contact } from "../Contact/Contact";

export function Main() {
  return (
    <Container id="main">
      <ParticlesBackground />
      <Hero />
      <About />
      <Projects />
      <Publications />
      <Contact />
    </Container>
  );
}
