import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PruebaGeneralLamina7Component } from './prueba-general-lamina7.component';

describe('PruebaGeneralLamina7Component', () => {
  let component: PruebaGeneralLamina7Component;
  let fixture: ComponentFixture<PruebaGeneralLamina7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PruebaGeneralLamina7Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PruebaGeneralLamina7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
