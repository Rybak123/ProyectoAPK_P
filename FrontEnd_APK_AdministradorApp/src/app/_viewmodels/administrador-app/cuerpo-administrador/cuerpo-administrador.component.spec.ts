import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuerpoAdministradorComponent } from './cuerpo-administrador.component';

describe('CuerpoAdministradorComponent', () => {
  let component: CuerpoAdministradorComponent;
  let fixture: ComponentFixture<CuerpoAdministradorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CuerpoAdministradorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CuerpoAdministradorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
