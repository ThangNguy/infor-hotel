import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  products = [
    {
      id: 1,
      name: 'Price',
      image: 'assets/Price.jpg'
    },
    {
      id: 2,
      name: 'Menu 1',
      image: 'assets/Menu1.jpg'
    },
    {
      id: 3,
      name: 'Menu 2',
      image: 'assets/Menu2.jpg'
    }
  ];
}
