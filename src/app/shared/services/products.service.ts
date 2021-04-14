/* eslint-disable @typescript-eslint/restrict-plus-operands */
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Product } from '../models/product.model';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
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
  create(): Observable<Product> {
    return this.apiService.update(
      environment.apiURL + environment.productsEndpoint,
      {
        // Add payload here
      }
    );
  }
  update(id: number | string): Observable<Partial<Product>> {
    return this.apiService.update(
      environment.apiURL + environment.productsEndpoint + id,
      {
        // Add payload here
      }
    );
  }
  delete(id: number | string): Observable<Product> {
    return this.apiService.delete(
      environment.apiURL + environment.productsEndpoint + id
    );
  }
}
