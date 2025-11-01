import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { Footer } from './footer/footer';
import { CarouselSection } from './features/home/components/carousel-section/carousel-section';
import { BlogSection } from './features/home/components/blog-section/blog-section';
import { ChefsSection } from './features/home/components/chefs-section/chefs-section';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer,CarouselSection,BlogSection,ChefsSection],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('my-app');
}
