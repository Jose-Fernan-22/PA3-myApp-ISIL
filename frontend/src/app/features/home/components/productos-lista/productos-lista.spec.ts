import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ProductosListaComponent } from './productos-lista';

describe('ProductosListaComponent', () => {
  let component: ProductosListaComponent;
  let fixture: ComponentFixture<ProductosListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, ProductosListaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductosListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
