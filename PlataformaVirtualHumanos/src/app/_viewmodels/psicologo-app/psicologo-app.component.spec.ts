import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PsicologoAppComponent } from './psicologo-app.component';

describe('PsicologoAppComponent', () => {
  let component: PsicologoAppComponent;
  let fixture: ComponentFixture<PsicologoAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PsicologoAppComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PsicologoAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
