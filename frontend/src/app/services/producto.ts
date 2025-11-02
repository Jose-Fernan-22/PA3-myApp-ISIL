import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// (Opcional pero recomendado) Creamos una interfaz para tipar los datos
export interface Producto {
  id: number;
  nombre: string;
  descripcion: string;
  precio: number;
}

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  // La URL de tu API de backend
  private apiUrl = 'http://localhost:3001/productos';

  // Inyectamos el HttpClient
  constructor(private http: HttpClient) { }

  /**
   * Método que consume la API y retorna un Observable
   * con la lista de productos.
   */
  getProductos(): Observable<Producto[]> {
    return this.http.get<Producto[]>(this.apiUrl);
  }
}