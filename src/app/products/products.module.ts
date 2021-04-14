import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { ProductsPageRoutingModule } from './products-routing.module';
import { ProductsPage } from './products.page';

@NgModule({
  imports: [CommonModule, ProductsPageRoutingModule, SharedModule],
  declarations: [ProductsPage],
})
export class ProductsPageModule {}
