import { AfterViewInit, Component, ElementRef, effect, signal, viewChild } from '@angular/core';
import { flowerParticlesConfig } from './core/flower-particles.config';
import { nightParticlesConfig } from './core/night-particles.config';
import { Flor } from './ui/flor/flor';
import { Gradient } from './ui/gradient/gradient';
import { Grass } from './ui/grass/grass';
import { Message1 } from './ui/message-1/message-1';
import { Message2 } from './ui/message-2/message-2';
import { Particles } from './ui/particles/particles';

@Component({
  selector: 'app-root',
  imports: [Flor, Grass, Particles, Gradient, Message1, Message2],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App implements AfterViewInit {
  readonly flor = viewChild(Flor);
  readonly grass = viewChild(Grass);
  readonly stageOneSpacer = viewChild.required<ElementRef<HTMLElement>>('stageOneSpacer');
  readonly stageTwoSpacer = viewChild<ElementRef<HTMLElement>>('stageTwoSpacer');

  readonly particles1 = viewChild<Particles>('particles1');

  readonly stage1Shown = signal(false);

  readonly showGoodNight = signal(false);

  readonly stage2Ended = signal(false);

  active = signal(1);
  secondSpacerVisible = signal(false);

  private observer?: IntersectionObserver;

  ngAfterViewInit(): void {
    this.grass()?.start();
    this.observer = new IntersectionObserver(this.onSpacerIntersect, {
      threshold: [0.5],
    });
    this.bindSpacers();
  }

  constructor() {
    effect(() => {
      if (this.active() === 1)
        setTimeout(() => {
          this.particles1()?.refresh();
        }, 50);
    });
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
    this.observer = undefined;
  }

  onMessageEnd(): void {
    this.secondSpacerVisible.set(true);
    setTimeout(() => {
      this.bindSpacers();
    });
    this.stage1Shown.set(true);
  }

  onStage2End() {
    this.stage2Ended.set(true);
  }

  private bindSpacers(): void {
    if (!this.observer) {
      return;
    }

    this.observer.disconnect();
    this.observer.observe(this.stageOneSpacer().nativeElement);

    const stageTwo = this.stageTwoSpacer();
    if (stageTwo) {
      this.observer.observe(stageTwo.nativeElement);
    }
  }

  private readonly onSpacerIntersect: IntersectionObserverCallback = (entries) => {
    for (const entry of entries) {
      if (entry.intersectionRatio < 0.5) {
        continue;
      }

      const stage = (entry.target as HTMLElement).dataset['stage'];
      if (stage === '2') {
        this.active.set(2);
        return;
      }
    }

    for (const entry of entries) {
      if (entry.intersectionRatio < 0.5) {
        continue;
      }

      const stage = (entry.target as HTMLElement).dataset['stage'];
      if (stage === '1') {
        this.active.set(1);
        this.stage2Ended.set(false);
        return;
      }
    }
  };

  nightParticlesConfig = nightParticlesConfig;
  flowerParticlesConfig = flowerParticlesConfig;
}
