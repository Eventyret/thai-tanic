import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { Product } from '../shared/models/product.model';
import { ProductsService } from '../shared/services/products.service';
import { ProductViewComponent } from './components/product-view/product-view.component';

@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
})
export class ProductsPage {
  products$: Observable<Product[]>;
  constructor(
    public productsService: ProductsService,
    private modalCtrl: ModalController
  ) {
    this.get();
  }

  get = (): void => {
    this.products$ = this.productsService.getAll();
  };
  createOrEdit = async (product: Product = null): Promise<void> => {
    const modal = await this.modalCtrl.create({
      component: ProductViewComponent,
      backdropDismiss: false,
      componentProps: {
        title: product ? `Edit ${product.title}` : 'Add Product',
      },
    });
    this.productsService.selectedProduct(product);
    await modal.present();
    const { data } = await modal.onDidDismiss();
    console.log(data);
  };
  delete = (id: string | number): void => {
    this.productsService.delete(id).subscribe(() => {
      this.get();
    });
  };
}
