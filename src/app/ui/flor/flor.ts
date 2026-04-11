import { Component, inject, output, signal } from '@angular/core';
import { Bus } from '../core/bus';
import { FlowerEntranceEndedEvent } from '../core/event/flower/flower-entrance-ended';

@Component({
  selector: 'app-flor',
  imports: [],
  templateUrl: './flor.html',
  styleUrl: './flor.scss',
})
export class Flor {
  private readonly bus = inject(Bus);
  readonly isAnimating = signal(false);
  readonly end = output<void>();

  emitEnd(): void {
    this.bus.emit(new FlowerEntranceEndedEvent());
    this.end.emit();
  }

  start(): void {
    console.log('startin');
    this.isAnimating.set(true);
  }

  onSceneAnimationEnd(event: AnimationEvent): void {
    if (event.animationName !== 'scene-enter' || event.target !== event.currentTarget) {
      return;
    }

    this.emitEnd();
  }
}
