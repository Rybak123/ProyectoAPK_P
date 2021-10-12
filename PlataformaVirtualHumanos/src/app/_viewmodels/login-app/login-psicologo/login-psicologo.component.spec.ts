import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginPsicologoComponent } from './login-psicologo.component';

describe('LoginPsicologoComponent', () => {
  let component: LoginPsicologoComponent;
  let fixture: ComponentFixture<LoginPsicologoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginPsicologoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginPsicologoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
