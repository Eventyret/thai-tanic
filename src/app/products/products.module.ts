import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { ProductViewComponent } from './components/product-view/product-view.component';
import { ProductsPageRoutingModule } from './products-routing.module';
import { ProductsPage } from './products.page';

@NgModule({
  imports: [CommonModule, ProductsPageRoutingModule, SharedModule],
  declarations: [ProductsPage, ProductViewComponent, ProductFormComponent],
})
export class ProductsPageModule {}
