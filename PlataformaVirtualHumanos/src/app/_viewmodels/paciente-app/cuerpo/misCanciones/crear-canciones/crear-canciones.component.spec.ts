import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearCancionesComponent } from './crear-canciones.component';

describe('CrearCancionesComponent', () => {
  let component: CrearCancionesComponent;
  let fixture: ComponentFixture<CrearCancionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearCancionesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearCancionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
