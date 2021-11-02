import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuerpoPsicologoComponent } from './cuerpo-psicologo.component';

describe('CuerpoPsicologoComponent', () => {
  let component: CuerpoPsicologoComponent;
  let fixture: ComponentFixture<CuerpoPsicologoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CuerpoPsicologoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CuerpoPsicologoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
