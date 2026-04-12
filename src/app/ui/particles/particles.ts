import { AfterViewInit, Component, inject, input, NgZone } from '@angular/core';
import { tsParticles, type Container, type ISourceOptions } from '@tsparticles/engine';
import { loadEmittersPlugin } from '@tsparticles/plugin-emitters';
import { loadImageShape } from '@tsparticles/shape-image';
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
  readonly options = input.required<ISourceOptions>();

  #container: Container | undefined;

  private readonly ngZone = inject(NgZone);

  ngAfterViewInit(): void {
    if (typeof window === 'undefined') {
      return;
    }

    this.ngZone.runOutsideAngular(async () => {
      await loadFull(tsParticles);
      await loadOpacityUpdater(tsParticles);
      await loadImageShape(tsParticles);
      await loadEmittersPlugin(tsParticles);

      this.#container = await tsParticles.load({
        id: this.id,
        options: this.options(),
      });
    });
  }

  ngOnDestroy(): void {
    this.#container?.destroy();
    this.#container = undefined;
  }
}
