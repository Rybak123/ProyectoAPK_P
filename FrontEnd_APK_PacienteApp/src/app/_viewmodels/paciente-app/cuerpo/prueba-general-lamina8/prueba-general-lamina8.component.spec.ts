import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PruebaGeneralLamina8Component } from './prueba-general-lamina8.component';

describe('PruebaGeneralLamina8Component', () => {
  let component: PruebaGeneralLamina8Component;
  let fixture: ComponentFixture<PruebaGeneralLamina8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PruebaGeneralLamina8Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PruebaGeneralLamina8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
