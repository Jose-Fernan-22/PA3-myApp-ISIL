import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { Footer } from './footer/footer';
import { ProductosListaComponent } from './features/home/components/productos-lista/productos-lista';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer, ProductosListaComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
})

export class App {
  protected readonly title = signal('frontend');
}
