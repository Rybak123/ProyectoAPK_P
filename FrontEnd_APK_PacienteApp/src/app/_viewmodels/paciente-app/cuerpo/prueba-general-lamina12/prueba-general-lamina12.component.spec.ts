import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PruebaGeneralLamina12Component } from './prueba-general-lamina12.component';

describe('PruebaGeneralLamina12Component', () => {
  let component: PruebaGeneralLamina12Component;
  let fixture: ComponentFixture<PruebaGeneralLamina12Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PruebaGeneralLamina12Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PruebaGeneralLamina12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
