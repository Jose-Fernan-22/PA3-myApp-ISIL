import { CommonModule } from '@angular/common'; // importamos esto para usar ng for
import { Component } from '@angular/core';

@Component({
  selector: 'app-blog-section',
  imports: [CommonModule],
  templateUrl: './blog-section.html',
  styleUrl: './blog-section.css'
})
export class BlogSection {
  posts = [
    {
      imageUrl: 'https://www.themezaa.com/html/leadgen/demo/restaurant/images/agency-content-img01.jpg',
      title: 'WARM HUMMUS WITH SPICED LAMB',
      excerpt: 'Lorem ipsum has been the industry\'s standard dummy text ever since, when an unknown printer took a galley of type and scrambled it to make a type.'
    },
    {
      imageUrl: 'https://www.themezaa.com/html/leadgen/demo/restaurant/images/agency-content-img02.jpg',
      title: 'SCRATCH MADE MOSCOW MULES',
      excerpt: 'Lorem ipsum has been the industry\'s standard dummy text ever since, when an unknown printer took a galley of type and scrambled it to make a type.'
    },
    {
      imageUrl: 'https://www.themezaa.com/html/leadgen/demo/restaurant/images/agency-content-img03.jpg',
      title: 'CRUMB TOPPED APPLE SLAB PIE',
      excerpt: 'Lorem ipsum has been the industry\'s standard dummy text ever since, when an unknown printer took a galley of type and scrambled it to make a type.'
    }
  ];
}
