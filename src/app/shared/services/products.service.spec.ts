import { TestBed } from '@angular/core/testing';
import { Product } from '../models/product.model';
import { ApiService } from './api.service';
import { ProductsService } from './products.service';

describe('ProductsService', () => {
  let service: ProductsService;

  beforeEach(() => {
    const apiServiceStub = () => ({
      get: arg => ({}),
      post: (arg, product) => ({}),
      update: (arg, product) => ({}),
      delete: arg => ({})
    });
    TestBed.configureTestingModule({
      providers: [
        ProductsService,
        { provide: ApiService, useFactory: apiServiceStub }
      ]
    });
    service = TestBed.inject(ProductsService);
  });

  it('can load instance', () => {
    expect(service).toBeTruthy();
  });

  describe('create', () => {
    it('makes expected calls', () => {
      const productStub: Product = <any>{};
      const apiServiceStub: ApiService = TestBed.inject(ApiService);
      spyOn(apiServiceStub, 'post').and.callThrough();
      service.create(productStub);
      expect(apiServiceStub.post).toHaveBeenCalled();
    });
  });

  describe('getAll', () => {
    it('makes expected calls', () => {
      const apiServiceStub: ApiService = TestBed.inject(ApiService);
      spyOn(apiServiceStub, 'get').and.callThrough();
      service.getAll();
      expect(apiServiceStub.get).toHaveBeenCalled();
    });
  });
});
