import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private apiService: ApiService) {}

  get(): Observable<Product> {
    return;
  }
  getAll(): Observable<Product[]> {
    return;
  }
  create(): Observable<Product> {
    return;
  }
  update(id: number | string): Observable<Partial<Product>> {
    return;
  }
  delete(id: number | string): Observable<Product> {
    return;
  }
}
