import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalificarMesComponent } from './calificar-mes.component';

describe('CalificarMesComponent', () => {
  let component: CalificarMesComponent;
  let fixture: ComponentFixture<CalificarMesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalificarMesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalificarMesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
