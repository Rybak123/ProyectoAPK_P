import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarraDeNavegacionPsicologoComponent } from './barra-de-navegacion-psicologo.component';

describe('BarraDeNavegacionPsicologoComponent', () => {
  let component: BarraDeNavegacionPsicologoComponent;
  let fixture: ComponentFixture<BarraDeNavegacionPsicologoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarraDeNavegacionPsicologoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BarraDeNavegacionPsicologoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
