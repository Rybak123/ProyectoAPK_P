import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaPrincipalAppComponent } from './pagina-principal-app.component';

describe('PaginaPrincipalAppComponent', () => {
  let component: PaginaPrincipalAppComponent;
  let fixture: ComponentFixture<PaginaPrincipalAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginaPrincipalAppComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginaPrincipalAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
