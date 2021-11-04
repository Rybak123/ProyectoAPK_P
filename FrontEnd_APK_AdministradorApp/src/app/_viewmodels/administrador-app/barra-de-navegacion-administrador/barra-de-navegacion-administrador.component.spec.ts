import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarraDeNavegacionAdministradorComponent } from './barra-de-navegacion-administrador.component';

describe('BarraDeNavegacionAdministradorComponent', () => {
  let component: BarraDeNavegacionAdministradorComponent;
  let fixture: ComponentFixture<BarraDeNavegacionAdministradorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarraDeNavegacionAdministradorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BarraDeNavegacionAdministradorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


});
