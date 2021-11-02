import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RespuestaCambiarContrasenaComponent } from './respuesta-cambiar-contrasena.component';

describe('RespuestaCambiarContrasenaComponent', () => {
  let component: RespuestaCambiarContrasenaComponent;
  let fixture: ComponentFixture<RespuestaCambiarContrasenaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RespuestaCambiarContrasenaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RespuestaCambiarContrasenaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
