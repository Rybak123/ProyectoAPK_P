import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PruebaGeneralLamina13Component } from './prueba-general-lamina13.component';

describe('PruebaGeneralLamina13Component', () => {
  let component: PruebaGeneralLamina13Component;
  let fixture: ComponentFixture<PruebaGeneralLamina13Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PruebaGeneralLamina13Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PruebaGeneralLamina13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
