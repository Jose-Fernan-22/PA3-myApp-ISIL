import { Component } from '@angular/core';
import { CarouselSection } from '../components/carousel-section/carousel-section';
import { BlogSection } from '../components/blog-section/blog-section';
import { ChefsSection } from '../components/chefs-section/chefs-section';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    CarouselSection,
    BlogSection,
    ChefsSection
  ],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css'
})
export class HomePageComponent {

}