import { AfterViewInit, Component, signal, viewChild } from '@angular/core';
import { Flor } from './ui/flor/flor';
import { Gradient } from './ui/gradient/gradient';
import { Grass } from './ui/grass/grass';
import { Particles } from './ui/particles/particles';

@Component({
  selector: 'app-root',
  imports: [Flor, Grass, Particles, Gradient],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App implements AfterViewInit {
  protected readonly title = signal('flor-jos2');

  readonly flor = viewChild(Flor);
  readonly grass = viewChild(Grass);

  ngAfterViewInit(): void {
    this.grass()?.start();
  }
}
