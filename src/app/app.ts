import { Component, signal } from '@angular/core';
import { Flor } from './ui/flor/flor';
import { Grass } from './ui/grass/grass';

@Component({
  selector: 'app-root',
  imports: [Flor, Grass],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('flor-jos2');
}
