import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PruebaGeneralLamina4Component } from './prueba-general-lamina4.component';

describe('PruebaGeneralLamina4Component', () => {
  let component: PruebaGeneralLamina4Component;
  let fixture: ComponentFixture<PruebaGeneralLamina4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PruebaGeneralLamina4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PruebaGeneralLamina4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
