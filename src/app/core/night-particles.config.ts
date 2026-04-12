import { ISourceOptions } from '@tsparticles/engine';

export const nightParticlesConfig: ISourceOptions = {
  background: {
    color: 'transparent',
  },
  detectRetina: false,
  fpsLimit: 30,
  particles: {
    color: {
      value: '#fff',
    },
    number: {
      density: {
        enable: true,
        height: 667,
        width: 375,
      },
      value: 400,
      limit: { mode: 'delete', value: 50 },
    },
    opacity: {
      animation: {
        enable: true,
        startValue: 'min',
        count: 200,
        speed: { max: 5, min: 1 },
        sync: false,
      },
      value: { max: 1, min: 0 },
    },
    shape: {
      type: 'circle',
    },
    size: {
      value: { min: 0.5, max: 1 },
    },
  },
};
