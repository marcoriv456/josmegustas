import { Component, effect, input, OnDestroy, output, signal } from '@angular/core';

@Component({
  selector: 'app-message-1',
  imports: [],
  templateUrl: './message-1.html',
  styleUrl: './message-1.scss',
})
export class Message1 implements OnDestroy {
  readonly end = output();
  readonly runAnim = input<boolean>(true);
  readonly step = signal(0);
  readonly runAnimEffect = effect(() => {
    if (!this.runAnim()) this.step.set(5);
  });
  intervalRef: number | null = null;
  start() {
    this.intervalRef = setInterval(() => {
      this.step.update((s) => s + 1);
      if (this.step() > 5) {
        this.end.emit();
      }
    }, 1000);
  }

  ngOnDestroy(): void {
    this.runAnimEffect.destroy();
    if (this.intervalRef) clearInterval(this.intervalRef);
  }
}
