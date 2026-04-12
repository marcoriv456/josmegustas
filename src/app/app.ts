import { AfterViewInit, Component, signal, viewChild } from '@angular/core';
import { flowerParticlesConfig } from './core/flower-particles.config';
import { nightParticlesConfig } from './core/night-particles.config';
import { Flor } from './ui/flor/flor';
import { Gradient } from './ui/gradient/gradient';
import { Grass } from './ui/grass/grass';
import { Message1 } from './ui/message-1/message-1';
import { Particles } from './ui/particles/particles';

@Component({
  selector: 'app-root',
  imports: [Flor, Grass, Particles, Gradient, Message1],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App implements AfterViewInit {
  protected readonly title = signal('flor-jos2');

  readonly flor = viewChild(Flor);
  readonly grass = viewChild(Grass);

  active = signal(1);

  ngAfterViewInit(): void {
    this.grass()?.start();
  }

  nightParticlesConfig = nightParticlesConfig;
  flowerParticlesConfig = flowerParticlesConfig;
}
