import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Flor } from './flor';

describe('Flor', () => {
  let component: Flor;
  let fixture: ComponentFixture<Flor>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Flor],
    }).compileComponents();

    fixture = TestBed.createComponent(Flor);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
