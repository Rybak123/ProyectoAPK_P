import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PruebaGeneralLamina3Component } from './prueba-general-lamina3.component';

describe('PruebaGeneralLamina3Component', () => {
  let component: PruebaGeneralLamina3Component;
  let fixture: ComponentFixture<PruebaGeneralLamina3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PruebaGeneralLamina3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PruebaGeneralLamina3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
