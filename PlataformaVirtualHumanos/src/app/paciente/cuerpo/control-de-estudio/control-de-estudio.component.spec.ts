import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlDeEstudioComponent } from './control-de-estudio.component';

describe('ControlDeEstudioComponent', () => {
  let component: ControlDeEstudioComponent;
  let fixture: ComponentFixture<ControlDeEstudioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ControlDeEstudioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ControlDeEstudioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
