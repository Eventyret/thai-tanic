import { Component, OnInit } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { Product } from '../shared/models/product.model';
import { ProductsService } from '../shared/services/products.service';
import { UserService } from '../shared/services/user.service';
import { ProductViewComponent } from './components/product-view/product-view.component';

@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
})
export class ProductsPage implements OnInit {
  products$: Observable<Product[]>;
  constructor(
    public productsService: ProductsService,
    private modalCtrl: ModalController,
    private toastCtrl: ToastController,
    private userService: UserService
  ) {
    this.get();
  }
  ngOnInit(): void {
    this.userService.getUserData().subscribe();
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
    const toast = await this.toastCtrl.create({
      header: data.saveSuccess ? 'All good 🎉' : 'Whospy  🤷‍♀️',
      color: data.saveSuccess ? 'success' : 'danger',
      message: data.saveSuccess
        ? 'We sent it to the backend'
        : 'Seems we have some connection problems, try again later.',
      duration: 2000,
    });
    await toast.present();
    this.get();
  };
  delete = (id: string | number): void => {
    this.productsService.delete(id).subscribe(async () => {
      const toast = await this.toastCtrl.create({
        header: 'All good 🎉',
        color: 'danger',
        message: 'We removed it from the backend',
        duration: 2000,
      });
      await toast.present();
      this.get();
    });
  };
}
