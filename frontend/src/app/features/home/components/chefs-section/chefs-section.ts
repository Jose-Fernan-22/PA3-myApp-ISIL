import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-chefs-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './chefs-section.html',
  styleUrl: './chefs-section.css'
})
export class ChefsSection {
  chefs = [
    {
      name: 'Gustave Berneir',
      title: 'Executive Chef',
      bio1: 'Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text.',
      bio2: 'Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.',
      signature: 'Gustave Bern',
      imageUrl: 'https://www.themezaa.com/html/leadgen/demo/restaurant/images/bg-image/restaurant-chef-01.jpg'
    },
    {
      name: 'Jane Doe',
      title: 'Pastry Chef',
      bio1: 'Specializing in delightful desserts and pastries, Jane brings a touch of sweetness to every dish. Her creations are renowned.',
      bio2: 'With over 15 years of experience, she combines classic techniques with modern flavors to create unforgettable culinary experiences.',
      signature: 'Jane Doe',
      imageUrl: 'https://www.themezaa.com/html/leadgen/demo/restaurant/images/bg-image/restaurant-chef-02.jpg'
    },
    {
      name: 'John Smith',
      title: 'Sous Chef',
      bio1: 'John is the master of the grill and savory dishes. His passion for fresh, local ingredients shines through in every plate he prepares.',
      bio2: 'He believes that the best meals are made with simple, high-quality ingredients and a lot of heart. A true artist in the kitchen.',
      signature: 'John Smith',
      imageUrl: 'https://www.themezaa.com/html/leadgen/demo/restaurant/images/bg-image/restaurant-chef-03.jpg'
    }
  ];
}
