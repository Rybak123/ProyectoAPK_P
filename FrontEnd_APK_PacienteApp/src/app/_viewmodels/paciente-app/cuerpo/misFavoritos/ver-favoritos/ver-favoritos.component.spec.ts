import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerFavoritosComponent } from './ver-favoritos.component';

describe('VerFavoritosComponent', () => {
  let component: VerFavoritosComponent;
  let fixture: ComponentFixture<VerFavoritosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerFavoritosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerFavoritosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
