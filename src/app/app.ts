import { AfterViewInit, Component, ElementRef, OnDestroy, signal, viewChild } from '@angular/core';
import { flowerParticlesConfig } from './core/flower-particles.config';
import { nightParticlesConfig } from './core/night-particles.config';
import { Flor } from './ui/flor/flor';
import { Gradient } from './ui/gradient/gradient';
import { Grass } from './ui/grass/grass';
import { Message1 } from './ui/message-1/message-1';
import { Particles } from './ui/particles/particles';

@Component({
  selector: 'app-root',
  imports: [Flor, Grass, Particles, Gradient, Message1],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App implements AfterViewInit {
  protected readonly title = signal('flor-jos2');

  readonly flor = viewChild(Flor);
  readonly grass = viewChild(Grass);
  readonly stageOneSpacer = viewChild.required<ElementRef<HTMLElement>>('stageOneSpacer');
  readonly stageTwoSpacer = viewChild<ElementRef<HTMLElement>>('stageTwoSpacer');

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

  ngOnDestroy(): void {
    this.observer?.disconnect();
    this.observer = undefined;
  }

  onMessageEnd(): void {
    this.secondSpacerVisible.set(true);
    setTimeout(() => {
      this.bindSpacers();
    });
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
        return;
      }
    }
  };

  nightParticlesConfig = nightParticlesConfig;
  flowerParticlesConfig = flowerParticlesConfig;
}
