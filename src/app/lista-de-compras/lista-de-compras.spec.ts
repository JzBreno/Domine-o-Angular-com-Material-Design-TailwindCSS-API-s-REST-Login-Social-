import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaDeCompras } from './lista-de-compras';

describe('ListaDeCompras', () => {
  let component: ListaDeCompras;
  let fixture: ComponentFixture<ListaDeCompras>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaDeCompras]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaDeCompras);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
