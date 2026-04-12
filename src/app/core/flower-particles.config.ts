import { ISourceOptions } from '@tsparticles/engine';

export const flowerParticlesConfig: ISourceOptions = {
  background: {
    color: 'transparent',
  },
  fpsLimit: 60,
  particles: {
    number: {
      density: {
        enable: true,
        height: 667,
        width: 375,
      },
      value: 10,
    },
    shape: {
      type: 'image',
      options: {
        image: [
          { src: '/flower-1-pink.svg', width: 128, height: 128 },
          { src: '/flower-1-orange.svg', width: 128, height: 128 },
          { src: '/flower-1-yellow.svg', width: 128, height: 128 },
          { src: '/flower-1-blue.svg', width: 128, height: 128 },
          { src: '/flower-1-green.svg', width: 128, height: 128 },
        ],
      },
    },
    size: {
      value: {
        min: 10,
        max: 22,
      },
    },
    opacity: {
      value: {
        min: 0.65,
        max: 0.95,
      },
    },
    rotate: {
      value: {
        min: 0,
        max: 360,
      },
      direction: 'random',
      animation: {
        enable: true,
        speed: 15,
        sync: false,
      },
    },
    move: {
      enable: true,
      direction: 'bottom',
      straight: true,
      // speed: {
      // min: 0.8,
      // max: 2.2,
      // },
      gravity: {
        enable: false,
        inverse: false,
        acceleration: 3.81,
        maxSpeed: 10,
      },
      // drift: {
      //   min: -0.2,
      //   max: 0.2,
      // },
      angle: {
        value: 90,
        offset: {
          min: -12,
          max: 12,
        },
      },
      // outModes: {
      //   default: 'out',
      //   bottom: 'bounce',
      // },
    },
  },
  // emitters: {
  //   direction: 'bottom',
  //   position: {
  //     x: 50,
  //     y: -10,
  //   },
  //   size: {
  //     width: 100,
  //     height: 0,
  //   },
  //
  //   rate: {
  //     quantity: 10,
  //     delay: 1,
  //   },
  // },
};
