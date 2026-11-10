import Particles, { ParticlesProvider } from "@tsparticles/react";
import type { Engine, ISourceOptions } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";
import { skills } from "../../data/skills";
import { usePrefersReducedMotion } from "../../hooks/usePrefersReducedMotion";

// Arka planda yüzen teknoloji ikonları. Hareket azaltılmışsa hiç çizilmez.
const options: ISourceOptions = {
  fullScreen: { enable: true, zIndex: 1 },
  detectRetina: true,
  fpsLimit: 60,
  interactivity: {
    events: {
      onClick: { enable: true, mode: "push" },
      onHover: { enable: true, mode: "bubble" },
      resize: { enable: true },
    },
    modes: {
      bubble: { distance: 400, duration: 2, opacity: 0.8, size: 2 },
      push: { quantity: 2 },
    },
  },
  particles: {
    move: { enable: true, direction: "none", outModes: "out", speed: 2 },
    number: { density: { enable: true }, limit: { value: 20 }, value: 15 },
    opacity: { value: { min: 0.2, max: 1 }, animation: { enable: true, speed: 1 } },
    rotate: { value: 0, direction: "random", animation: { enable: true, speed: 5 } },
    shape: {
      type: "image",
      options: {
        image: skills.map((s) => ({ src: s.icon, width: 20, height: 20 })),
      },
    },
    size: { value: 16 },
  },
};

const init = (engine: Engine) => loadSlim(engine);

export function ParticlesBackground() {
  const reducedMotion = usePrefersReducedMotion();
  if (reducedMotion) return null;

  return (
    <ParticlesProvider init={init}>
      <Particles id="tsparticles" options={options} />
    </ParticlesProvider>
  );
}
