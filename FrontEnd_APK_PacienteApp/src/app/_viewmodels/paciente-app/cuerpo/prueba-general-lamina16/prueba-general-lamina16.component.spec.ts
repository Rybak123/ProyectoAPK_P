import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PruebaGeneralLamina16Component } from './prueba-general-lamina16.component';

describe('PruebaGeneralLamina16Component', () => {
  let component: PruebaGeneralLamina16Component;
  let fixture: ComponentFixture<PruebaGeneralLamina16Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PruebaGeneralLamina16Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PruebaGeneralLamina16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
