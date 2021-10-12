import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilPsicologoComponent } from './perfil-psicologo.component';

describe('PerfilPsicologoComponent', () => {
  let component: PerfilPsicologoComponent;
  let fixture: ComponentFixture<PerfilPsicologoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerfilPsicologoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfilPsicologoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
