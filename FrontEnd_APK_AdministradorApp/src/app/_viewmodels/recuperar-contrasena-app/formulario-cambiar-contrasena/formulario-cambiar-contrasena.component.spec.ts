import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioCambiarContrasenaComponent } from './formulario-cambiar-contrasena.component';

describe('FormularioCambiarContrasenaComponent', () => {
  let component: FormularioCambiarContrasenaComponent;
  let fixture: ComponentFixture<FormularioCambiarContrasenaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioCambiarContrasenaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioCambiarContrasenaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


});
