import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Product } from 'src/app/shared/models/product.model';
import { ProductsService } from 'src/app/shared/services/products.service';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.scss'],
})
export class ProductViewComponent {
  productForm = {} as Product;
  constructor(
    public productsService: ProductsService,
    public modalCtrl: ModalController
  ) {}
}
