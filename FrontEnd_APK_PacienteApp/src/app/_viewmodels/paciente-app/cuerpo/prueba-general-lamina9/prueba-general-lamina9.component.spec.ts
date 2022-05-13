import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PruebaGeneralLamina9Component } from './prueba-general-lamina9.component';

describe('PruebaGeneralLamina9Component', () => {
  let component: PruebaGeneralLamina9Component;
  let fixture: ComponentFixture<PruebaGeneralLamina9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PruebaGeneralLamina9Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PruebaGeneralLamina9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
