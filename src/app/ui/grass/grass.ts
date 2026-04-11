import { Component, output, signal } from '@angular/core';

@Component({
  selector: 'app-grass',
  imports: [],
  templateUrl: './grass.html',
  styleUrl: './grass.scss',
})
export class Grass {
  readonly isAnimating = signal(false);
  readonly end = output<void>();
  readonly load = output<void>();

  start(): void {
    this.isAnimating.set(true);
  }
}
