import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Grass } from './grass';

describe('Grass', () => {
  let component: Grass;
  let fixture: ComponentFixture<Grass>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Grass],
    }).compileComponents();

    fixture = TestBed.createComponent(Grass);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
