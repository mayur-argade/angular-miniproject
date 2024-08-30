import { Component } from '@angular/core';

@Component({
  selector: 'app-trending-items',
  templateUrl: './trending-items.component.html',
  styleUrl: './trending-items.component.css'
})
export class TrendingItemsComponent {
    items = [
        {
            image : "assets/cupcake1.png",
            ratings: 3,
            title: "Perfect vanila cupcake",
            price: 10,
            property: "Changable"
        },
        {
            image : "assets/cupcake2.png",
            ratings: 5,
            title: "Chocolate Cupcake",
            price: 10,
            property: "Changable"
        },
        {
            image : "assets/cupcake3.png",
            ratings: 4,
            title: "Stawberry Cupcake",
            price: 30,
            property: "Changable"
        }
    ]
}
