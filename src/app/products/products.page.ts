import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../shared/models/product.model';
import { ProductsService } from '../shared/services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
})
export class ProductsPage {
  products$: Observable<Product[]>;
  constructor(public productsService: ProductsService) {
    this.products$ = this.productsService.getAll();
  }
}
