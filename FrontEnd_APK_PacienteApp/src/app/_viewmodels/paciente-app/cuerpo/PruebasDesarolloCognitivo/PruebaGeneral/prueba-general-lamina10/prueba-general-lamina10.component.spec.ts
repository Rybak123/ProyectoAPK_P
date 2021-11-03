import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PruebaGeneralLamina10Component } from './prueba-general-lamina10.component';

describe('PruebaGeneralLamina10Component', () => {
  let component: PruebaGeneralLamina10Component;
  let fixture: ComponentFixture<PruebaGeneralLamina10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PruebaGeneralLamina10Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PruebaGeneralLamina10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
