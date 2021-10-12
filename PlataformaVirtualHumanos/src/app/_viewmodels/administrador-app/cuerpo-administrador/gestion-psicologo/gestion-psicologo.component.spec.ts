import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionPsicologoComponent } from './gestion-psicologo.component';

describe('GestionPsicologoComponent', () => {
  let component: GestionPsicologoComponent;
  let fixture: ComponentFixture<GestionPsicologoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionPsicologoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionPsicologoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
