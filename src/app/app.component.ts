import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  products = [
    {
      name: 'Price',
      image: 'assets/Price.jpg'
    },
    {
      name: 'Menu 1',
      image: 'assets/Menu1.jpg'
    },
    {
      name: 'Menu 2',
      image: 'assets/Menu2.jpg'
    }
  ];
}
