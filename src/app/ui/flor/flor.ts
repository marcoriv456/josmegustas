import { Component, output, signal } from '@angular/core';

@Component({
  selector: 'app-flor',
  imports: [],
  templateUrl: './flor.html',
  styleUrl: './flor.scss',
})
export class Flor {
  readonly isAnimating = signal(false);
  readonly end = output<void>();

  emitEnd(): void {
    this.end.emit();
  }

  start(): void {
    this.isAnimating.set(true);
  }

  onSceneAnimationEnd(event: AnimationEvent): void {
    if (event.animationName !== 'scene-enter' || event.target !== event.currentTarget) {
      return;
    }

    this.emitEnd();
  }
}
