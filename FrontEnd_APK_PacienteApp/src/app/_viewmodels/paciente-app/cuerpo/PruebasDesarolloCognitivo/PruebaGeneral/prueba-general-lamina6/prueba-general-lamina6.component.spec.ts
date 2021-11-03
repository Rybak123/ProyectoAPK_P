import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PruebaGeneralLamina6Component } from './prueba-general-lamina6.component';

describe('PruebaGeneralLamina6Component', () => {
  let component: PruebaGeneralLamina6Component;
  let fixture: ComponentFixture<PruebaGeneralLamina6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PruebaGeneralLamina6Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PruebaGeneralLamina6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
