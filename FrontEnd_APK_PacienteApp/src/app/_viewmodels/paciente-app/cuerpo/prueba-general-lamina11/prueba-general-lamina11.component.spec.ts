import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PruebaGeneralLamina11Component } from './prueba-general-lamina11.component';

describe('PruebaGeneralLamina11Component', () => {
  let component: PruebaGeneralLamina11Component;
  let fixture: ComponentFixture<PruebaGeneralLamina11Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PruebaGeneralLamina11Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PruebaGeneralLamina11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
