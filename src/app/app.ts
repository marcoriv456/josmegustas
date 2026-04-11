import { AfterViewInit, Component, signal, viewChild } from '@angular/core';
import { Flor } from './ui/flor/flor';
import { Grass } from './ui/grass/grass';

@Component({
  selector: 'app-root',
  imports: [Flor, Grass],
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

  onGrassLoad(): void {
    this.grass()?.start();
  }
  onGrassEnd(): void {
    this.flor()?.start();
  }
}
