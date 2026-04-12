import { AfterViewInit, Component, output, signal } from '@angular/core';

@Component({
  selector: 'app-message-1',
  imports: [],
  templateUrl: './message-1.html',
  styleUrl: './message-1.scss',
})
export class Message1 implements AfterViewInit {
  readonly step = signal(0);
  readonly end = output();

  ngAfterViewInit(): void {
    setInterval(() => {
      this.step.update((s) => s + 1);
      if (this.step() > 5) this.end.emit();
    }, 1000);
  }
}
