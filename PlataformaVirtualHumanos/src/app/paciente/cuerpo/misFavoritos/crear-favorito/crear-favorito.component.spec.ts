import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearFavoritoComponent } from './crear-favorito.component';

describe('CrearFavoritoComponent', () => {
  let component: CrearFavoritoComponent;
  let fixture: ComponentFixture<CrearFavoritoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearFavoritoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearFavoritoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
