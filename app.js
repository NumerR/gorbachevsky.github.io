tsParticles.load("particles", {
  particles: {
    number: { value: 80, density: { enable: true, area: 800 } },
    color: { value: "#959394" },
    links: {
      enable: true,
      distance: 120,
      color: "#635b5fff",
      opacity: 0.4,
      width: 1
    },
    move: {
      enable: true,
      speed: 0.8,
      direction: "none",
      outModes: { default: "bounce" }
    },
    size: { value: 2 },
    opacity: { value: 0.5 }
  },
  interactivity: {
    events: {
      onHover: { enable: true, mode: ["repulse", "connect"] },
      resize: true
    },
    modes: {
      repulse: {
        distance: 50,
        duration: 0.7,
        speed:0.3,
        easing: 'ease-out'
    },
      connect: { distance: 140 }
    }
  },
  background: { color: "#1a1a1a" }
});