import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PruebaGeneralLamina14Component } from './prueba-general-lamina14.component';

describe('PruebaGeneralLamina14Component', () => {
  let component: PruebaGeneralLamina14Component;
  let fixture: ComponentFixture<PruebaGeneralLamina14Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PruebaGeneralLamina14Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PruebaGeneralLamina14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
