import { Product } from './../models/product.model';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent {
  product: Product[];
  title = 'app-inventario';

  constructor() {
    this.product = [
      new Product(
        'MYSHOES',
        'Nike Air Force',
        'https://raw.githubusercontent.com/Jesusd19/InventarioApp/master/src/assets/images/products/air-shoes.jpg',
        ['Men', 'Shoes', 'Running Shoes'],
        129.99
      ),
      new Product(
        'NICEHAT',
        'Leather Jacket',
        'https://raw.githubusercontent.com/Jesusd19/InventarioApp/master/src/assets/images/products/brow-jacket.jpg',
        ['Women', 'Apparel', 'Jackets & Vests'],
        267.99
      ),
      new Product(
        'NICEHAT',
        'Cistera Top Gray Hat',
        'https://raw.githubusercontent.com/Jesusd19/InventarioApp/master/src/assets/images/products/gray-hat.jpg',
        ['Men', 'Accessories', 'Hats'],
        49.99
      ),
    ];
  }

  productWasSelected(product: Product): void {
    console.log('Product clicked: ', product);
  }
}
