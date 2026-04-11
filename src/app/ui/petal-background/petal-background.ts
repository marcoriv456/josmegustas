import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  inject,
  NgZone,
  OnDestroy,
} from '@angular/core';

import { tsParticles, type Container, type ISourceOptions } from '@tsparticles/engine';
import { loadFull } from 'tsparticles';

@Component({
  selector: 'mb-petal-background',
  template: `
    <div class="pointer-events-none absolute inset-0 z-0 overflow-hidden" aria-hidden="true">
      <div [id]="id" class="h-full w-full"></div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PetalBackgroundComponent implements AfterViewInit, OnDestroy {
  protected readonly id = 'mb-petals';

  #container: Container | undefined;

  private readonly ngZone = inject(NgZone);

  ngAfterViewInit(): void {
    if (typeof window === 'undefined') {
      return;
    }

    this.ngZone.runOutsideAngular(async () => {
      await loadFull(tsParticles);

      this.#container = await tsParticles.load({
        id: this.id,
        options: this.#options,
      });
    });
  }

  ngOnDestroy(): void {
    this.#container?.destroy();
    this.#container = undefined;
  }

  readonly #options: ISourceOptions = {
    fpsLimit: 60,
    detectRetina: true,
    background: { color: { value: 'transparent' } },
    fullScreen: { enable: false },
    interactivity: {
      events: {
        onHover: { enable: false, mode: [] },
        onClick: { enable: false, mode: [] },
        resize: { enable: true },
      },
    },
    emitters: {
      position: { x: 50, y: -5 },
      rate: { quantity: 1, delay: 0.5 },
      size: { width: 100, height: 0 },
    },
    particles: {
      number: { value: 40, limit: { value: 60 } },
      shape: {
        type: 'image',
        options: {
          image: [
            { src: '/assets/bg/1.svg', width: 100, height: 100 },
            { src: '/assets/bg/2.svg', width: 100, height: 100 },
            { src: '/assets/bg/3.svg', width: 100, height: 100 },
            { src: '/assets/bg/4.svg', width: 100, height: 100 },
            { src: '/assets/bg/5.svg', width: 100, height: 100 },
            { src: '/assets/bg/6.svg', width: 100, height: 100 },
            { src: '/assets/bg/8.svg', width: 100, height: 100 },
            { src: '/assets/bg/9.svg', width: 100, height: 100 },
            { src: '/assets/bg/10.svg', width: 100, height: 100 },
            { src: '/assets/bg/11.svg', width: 100, height: 100 },
          ],
        },
      },
      opacity: { value: { min: 0.55, max: 0.95 } },
      size: { value: { min: 5, max: 15 } },
      rotate: {
        value: { min: 0, max: 360 },
        direction: 'random',
        animation: { enable: true, speed: 4 },
      },
      move: {
        enable: true,
        direction: 'bottom',
        speed: { min: 1.6, max: 2.2 },
        // speed: { min: 3, max: 4 },
        straight: false,
        outModes: { default: 'none' },
        angle: {
          value: 90,
          offset: { min: -18, max: 18 },
        },
      },
    },
  };
}
