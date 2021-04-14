import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ProductFieldFormsConfig } from 'src/app/forms/fields/product.fields';
import { ProductsService } from 'src/app/shared/services/products.service';
import { ProductFormComponent } from './product-form.component';

describe('ProductFormComponent', () => {
  let component: ProductFormComponent;
  let fixture: ComponentFixture<ProductFormComponent>;

  beforeEach(() => {
    const modalControllerStub = () => ({ dismiss: (object) => ({}) });
    const productFieldFormsConfigStub = () => ({ fields: {} });
    const productsServiceStub = () => ({
      product$: { subscribe: (f) => f({}) },
      create: (value) => ({ pipe: () => ({ subscribe: (f) => f({}) }) }),
      update: (id, newProduct) => ({
        pipe: () => ({ subscribe: (f) => f({}) }),
      }),
    });
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [ProductFormComponent],
      providers: [
        { provide: ModalController, useFactory: modalControllerStub },
        {
          provide: ProductFieldFormsConfig,
          useFactory: productFieldFormsConfigStub,
        },
        { provide: ProductsService, useFactory: productsServiceStub },
      ],
    });
    fixture = TestBed.createComponent(ProductFormComponent);
    component = fixture.componentInstance;
  });

  it('can load instance', () => {
    expect(component).toBeTruthy();
  });

  describe('createOrEdit', () => {
    it('makes expected calls', () => {
      const modalControllerStub: ModalController = fixture.debugElement.injector.get(
        ModalController
      );
      const productsServiceStub: ProductsService = fixture.debugElement.injector.get(
        ProductsService
      );
      spyOn(modalControllerStub, 'dismiss').and.callThrough();
      spyOn(productsServiceStub, 'update').and.callThrough();
      component.createOrEdit();
      expect(modalControllerStub.dismiss).toHaveBeenCalled();
      expect(productsServiceStub.update).toHaveBeenCalled();
    });
  });
});
