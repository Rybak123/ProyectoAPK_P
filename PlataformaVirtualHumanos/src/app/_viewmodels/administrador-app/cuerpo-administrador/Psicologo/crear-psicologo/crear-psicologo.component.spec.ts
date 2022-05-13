import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearPsicologoComponent } from './crear-psicologo.component';

describe('CrearPsicologoComponent', () => {
  let component: CrearPsicologoComponent;
  let fixture: ComponentFixture<CrearPsicologoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearPsicologoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearPsicologoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
