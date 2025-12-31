import { useEffect, useState, useMemo } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";
import type { ISourceOptions } from "@tsparticles/engine";

interface TriangleParticlesProps {
  color?: string;
  quantity?: number;
}

const TriangleParticles = ({ color = "#ffffff", quantity = 80 }: TriangleParticlesProps) => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadFull(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = async (container?: any) => {
  if (container) {
    container.actualOptions.fullScreen.enable = false;
    await container.refresh(); 
  }
};

  const options: ISourceOptions = useMemo(() => ({
    fullScreen: { enable: false },
    maintainAspectRatio: false,
    fpsLimit: 120,
    resize: {
      enable: true,
      delay: 0,
    },

    background: {
      color: {
      value: "transparent",
      },
    },
    interactivity: {
      events: {
        onHover: { enable: true, mode: "push" },
      },
      modes: {
        push: { quantity: 4 },
      },
    },
    particles: {
      color: { value: color },
      links: {
        enable: true,
        color: color,
        distance: 150,
        opacity: 0.2,
        width: 1,
        triangles: {
          enable: true,
          color: color,
          opacity: 0.01,
      },
      },
      move: {
        enable: true,
        speed: { min: 1, max: 3 },
        direction: "none",
        outModes: { default: "out" },
      },
      number: {
        density: { enable: true, area: 800 },
        value: quantity,
      },
      opacity: {
        value: { min: 0.1, max: 0.5 },
      },
      shape: {
        type: "polygon",
        options: {
          polygon: { sides: 3 },
        },
      },
      size: {
        value: { min: 1, max: 3 },
      },
    },
    detectRetina: true,
  }), [color, quantity]);

  if (init) {
    return (
      <Particles
        id="tsparticles"
        options={options}
        particlesLoaded={particlesLoaded}
        className="particles-container"
        style={{
          display: "block",
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: -1,
          inset: 0,
        }}
      />
    );
  }

  return null;
};

export default TriangleParticles;