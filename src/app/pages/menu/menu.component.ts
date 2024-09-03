import { Component } from '@angular/core';
import { ApiService } from '../../services/menu/api.service';
import { Sweet } from '../../classes/sweet';
@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrl: './menu.component.css'
})
export class MenuComponent {
    sweets: any[] = [];

    constructor(private apis: ApiService) { }

    ngOnInit(): void {
        this.getAllSweets();
    }

    getAllSweets(): void {
    this.apis.getAllSweets().subscribe({
      next: (data) => {
        this.sweets = data; // Assuming data is an array of objects
        console.log(this.sweets);
      },
      error: (error) => console.error(error)
    });
  }
}
