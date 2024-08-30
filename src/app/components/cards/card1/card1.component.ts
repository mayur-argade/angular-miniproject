import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card1',
  templateUrl: './card1.component.html',
  styleUrl: './card1.component.css'
})
export class Card1Component {
    @Input() item!: { image: string, ratings: number, title: string, price: number, property: string} 
    maxStars: number = 5;  // Total number of stars

  getFullStars(): number[] {
    return Array(Math.floor(this.item.ratings)).fill(1);
  }

  getHalfStar(): boolean {
    return this.item.ratings % 1 >= 0.5;
  }

  getEmptyStars(): number[] {
    return Array(this.maxStars - Math.ceil(this.item.ratings)).fill(1);
  }
}
