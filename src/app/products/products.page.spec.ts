import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { ProductsService } from '../shared/services/products.service';
import { ProductsPage } from './products.page';

describe('ProductsPage', () => {
  let component: ProductsPage;
  let fixture: ComponentFixture<ProductsPage>;

  beforeEach(() => {
    const modalControllerStub = () => ({});
    const toastControllerStub = () => ({});
    const productsServiceStub = () => ({
      getAll: () => ({}),
    });
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [ProductsPage],
      providers: [
        { provide: ModalController, useFactory: modalControllerStub },
        { provide: ToastController, useFactory: toastControllerStub },
        { provide: ProductsService, useFactory: productsServiceStub },
      ],
    });
    fixture = TestBed.createComponent(ProductsPage);
    component = fixture.componentInstance;
  });

  it('can load instance', () => {
    expect(component).toBeTruthy();
  });
});
