import { Component, signal } from '@angular/core';
import { Flor } from './ui/flor/flor';

@Component({
  selector: 'app-root',
  imports: [Flor],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('flor-jos2');
}
