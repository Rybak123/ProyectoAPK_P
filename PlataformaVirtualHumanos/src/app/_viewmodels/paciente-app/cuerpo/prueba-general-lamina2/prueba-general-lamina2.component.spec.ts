import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PruebaGeneralLamina2Component } from './prueba-general-lamina2.component';

describe('PruebaGeneralLamina2Component', () => {
  let component: PruebaGeneralLamina2Component;
  let fixture: ComponentFixture<PruebaGeneralLamina2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PruebaGeneralLamina2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PruebaGeneralLamina2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
