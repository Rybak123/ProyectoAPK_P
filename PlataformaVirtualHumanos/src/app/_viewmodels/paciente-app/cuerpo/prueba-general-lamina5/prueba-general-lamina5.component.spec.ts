import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PruebaGeneralLamina5Component } from './prueba-general-lamina5.component';

describe('PruebaGeneralLamina5Component', () => {
  let component: PruebaGeneralLamina5Component;
  let fixture: ComponentFixture<PruebaGeneralLamina5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PruebaGeneralLamina5Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PruebaGeneralLamina5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
