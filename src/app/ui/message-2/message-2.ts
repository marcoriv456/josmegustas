import { AfterViewInit, Component, effect, input, OnDestroy, output, signal } from '@angular/core';

@Component({
  selector: 'app-message-2',
  imports: [],
  templateUrl: './message-2.html',
  styleUrl: './message-2.scss',
})
export class Message2 implements AfterViewInit, OnDestroy {
  readonly end = output();
  readonly runAnim = input<boolean>(true);
  readonly step = signal(0);
  readonly runAnimEffect = effect(() => {
    if (!this.runAnim()) this.step.set(5);
  });
  intervalRef: number | null = null;

  ngAfterViewInit(): void {
    this.intervalRef = setInterval(() => {
      this.step.update((s) => s + 1);
      if (this.step() > 3) {
        this.end.emit();
      }
    }, 500);
  }

  ngOnDestroy(): void {
    this.runAnimEffect.destroy();
    if (this.intervalRef) clearInterval(this.intervalRef);
  }
}
