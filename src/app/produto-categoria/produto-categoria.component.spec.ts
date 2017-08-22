import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutoCategoriaComponent } from './produto-categoria.component';

describe('ProdutoCategoriaComponent', () => {
  let component: ProdutoCategoriaComponent;
  let fixture: ComponentFixture<ProdutoCategoriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProdutoCategoriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdutoCategoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
