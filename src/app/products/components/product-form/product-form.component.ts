import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';
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
    private productService: ProductsService
  ) {}

  ngOnInit(): void {
    this.productFields = this.fieldsConfig.fields;
    this.productService.product$.subscribe((product: Product) => {
      this.productModel = product;
    });
  }
}
