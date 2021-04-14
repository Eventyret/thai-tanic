/* eslint-disable @typescript-eslint/restrict-plus-operands */
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product } from '../models/product.model';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private productSubject = new BehaviorSubject<Product>(null);
  product$ = this.productSubject.asObservable();
  constructor(private apiService: ApiService) {}

  get(id: string | number): Observable<Product> {
    return this.apiService.get(
      environment.apiURL + environment.productsEndpoint + id
    );
  }
  getAll(): Observable<Product[]> {
    return this.apiService.get(
      environment.apiURL + environment.productsEndpoint
    );
  }
  create(product: Product): Observable<Product> {
    return this.apiService.post(
      environment.apiURL + environment.productsEndpoint,
      product
    );
  }
  update(
    id: number | string,
    product: Partial<Product>
  ): Observable<Partial<Product>> {
    return this.apiService.update(
      environment.apiURL + environment.productsEndpoint + id,
      product
    );
  }
  delete(id: number | string): Observable<Product> {
    return this.apiService.delete(
      environment.apiURL + environment.productsEndpoint + id
    );
  }
  selectedProduct(product: Product): void {
    this.productSubject.next(product);
  }
}
