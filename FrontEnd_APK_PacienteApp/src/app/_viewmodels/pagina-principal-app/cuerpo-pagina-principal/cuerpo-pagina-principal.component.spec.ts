import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuerpoPaginaPrincipalComponent } from './cuerpo-pagina-principal.component';

describe('CuerpoPaginaPrincipalComponent', () => {
  let component: CuerpoPaginaPrincipalComponent;
  let fixture: ComponentFixture<CuerpoPaginaPrincipalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CuerpoPaginaPrincipalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CuerpoPaginaPrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
