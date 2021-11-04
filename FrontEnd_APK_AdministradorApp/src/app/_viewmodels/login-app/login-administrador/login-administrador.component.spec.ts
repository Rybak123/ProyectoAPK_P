import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

import { LoginAdministradorComponent } from './login-administrador.component';

describe('LoginAdministradorComponent', () => {
  let component: LoginAdministradorComponent;
  let fixture: ComponentFixture<LoginAdministradorComponent>;
  const formBuilder: FormBuilder = new FormBuilder();
  beforeEach(async () => {
    
    await TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule ,
        RouterTestingModule,
        HttpClientModule
      ],
      declarations: [ LoginAdministradorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginAdministradorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Debe ser creado', () => {
    expect(component).toBeTruthy();
  });

  it('Debe detectar que el formulario sea invalido', (done) => {
    //No se envía ningun dato

    /*component.loginForm = formBuilder.group({
      username: '123456789',
      password: 'administradoralfa'
    });*/

    //Pulsar el botón de "Envíar"
    fixture.nativeElement.querySelector('button').click();

    //Ejecutar el metodo de la autenticación
    component.onSubmit().then((result:any) => {

      //Se espera que el resultado de la autenticación concida con la cadena de texto "Invalid_form"
      expect(result).toEqual('invalid_form');

      //Se termina de ejecutar la prueba dentro de la promesa
      done();
    }).catch((err:any) => {
      expect(err).toEqual('invalid_form');
      done();
    });
  });

  it('Debe detectar que el usuario se autentique con un carnet de identidad y contraseña correcto', (done) => {
    component.loginForm = formBuilder.group({
      username: '123456789',
      password: 'administradoralfa'
    });
    fixture.nativeElement.querySelector('button').click();
    component.onSubmit().then((result:any) => {
      expect(result).toEqual('login_valid');
      done();
    }).catch((err:any) => {
      expect(err).toEqual('login_invalid');
      done();
    });

  });

  it('Debe detectar que el usuario se autentique con un carnet de identidad y contraseña incorrecto', (done) => {
    component.loginForm = formBuilder.group({
      username: 'test@test.com',
      password: '123'
    });
    fixture.nativeElement.querySelector('button').click();
    component.onSubmit().then((result:any) => {
      expect(result).toEqual('login_invalid');
      done();
    }).catch((err:any) => {
      expect(err).toEqual('login_invalid');
      done();
    });
  });

});
