import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarraDeNavegacionPaginaPrincipalComponent } from './barra-de-navegacion-pagina-principal.component';

describe('BarraDeNavegacionPaginaPrincipalComponent', () => {
  let component: BarraDeNavegacionPaginaPrincipalComponent;
  let fixture: ComponentFixture<BarraDeNavegacionPaginaPrincipalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarraDeNavegacionPaginaPrincipalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BarraDeNavegacionPaginaPrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
