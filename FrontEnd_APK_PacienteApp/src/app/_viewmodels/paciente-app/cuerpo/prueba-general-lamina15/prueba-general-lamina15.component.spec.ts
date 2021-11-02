import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PruebaGeneralLamina15Component } from './prueba-general-lamina15.component';

describe('PruebaGeneralLamina15Component', () => {
  let component: PruebaGeneralLamina15Component;
  let fixture: ComponentFixture<PruebaGeneralLamina15Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PruebaGeneralLamina15Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PruebaGeneralLamina15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
