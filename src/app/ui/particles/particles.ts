import { AfterViewInit, Component, inject, NgZone } from '@angular/core';
import { tsParticles, type Container, type ISourceOptions } from '@tsparticles/engine';
import { loadOpacityUpdater } from '@tsparticles/updater-opacity';
import { loadFull } from 'tsparticles';
@Component({
  selector: 'app-particles',
  imports: [],
  templateUrl: './particles.html',
  styleUrl: './particles.scss',
})
export class Particles implements AfterViewInit {
  readonly id = 'particle-container';

  #container: Container | undefined;

  private readonly ngZone = inject(NgZone);

  ngAfterViewInit(): void {
    if (typeof window === 'undefined') {
      return;
    }

    this.ngZone.runOutsideAngular(async () => {
      await loadFull(tsParticles);
      await loadOpacityUpdater(tsParticles);

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
}
