import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';
import { of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ProductFieldFormsConfig } from 'src/app/forms/fields/product.fields';
import { Product } from 'src/app/shared/models/product.model';
import { ProductsService } from 'src/app/shared/services/products.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss'],
  providers: [ProductFieldFormsConfig],
})
export class ProductFormComponent implements OnInit {
  productForm = new FormGroup({});
  productModel = {} as Product;
  productFields: FormlyFieldConfig[];
  options: FormlyFormOptions = {};
  constructor(
    private fieldsConfig: ProductFieldFormsConfig,
    private productService: ProductsService,
    private modalCtrl: ModalController
  ) {}

  ngOnInit(): void {
    this.productFields = this.fieldsConfig.fields;
    this.productService.product$.subscribe((product: Product) => {
      this.productModel = product;
    });
  }
  create(): void {
    const newProduct = {
      ...this.productForm.value,
    };
    this.productService
      .create(newProduct)
      .pipe(
        catchError(() => {
          this.modalCtrl.dismiss({ saveSuccess: false });
          return of(false);
        })
      )
      .subscribe(() => {
        this.modalCtrl.dismiss({ saveSuccess: true });
      });
  }
}
