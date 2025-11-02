import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importante para *ngFor
import { ProductoService, Producto } from '../../../../services/producto'; // Importamos el servicio y la interfaz (ruta corregida)

@Component({
  selector: 'app-productos-lista',
  standalone: true,
  imports: [CommonModule], // ¡Importante! Añadir CommonModule para directivas
  templateUrl: './productos-lista.component.html',
  styleUrls: ['./productos-lista.component.css']
})
export class ProductosListaComponent implements OnInit {

  // Creamos un array vacío para guardar los productos
  public productos: Producto[] = [];

  // Inyectamos nuestro ProductoService en el constructor
  constructor(private productoService: ProductoService) {}

  // ngOnInit se ejecuta cuando el componente se inicia
  ngOnInit(): void {
    this.cargarProductos();
  }

  /**
   * Llama al método getProductos() del servicio.
   * Cuando la API responde (suscribe), guarda los datos en el array 'productos'.
   */
  cargarProductos(): void {
    this.productoService.getProductos().subscribe(
      (data: Producto[]) => {
        this.productos = data;
        console.log('Productos cargados desde la API:', data);
      },
      (error: any) => {
        console.error('Error al cargar productos:', error);
      }
    );
  }
}