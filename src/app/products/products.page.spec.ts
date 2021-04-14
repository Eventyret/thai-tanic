import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { ProductsService } from '../shared/services/products.service';
import { UserService } from '../shared/services/user.service';
import { ProductsPage } from './products.page';

describe('ProductsPage', () => {
  let component: ProductsPage;
  let fixture: ComponentFixture<ProductsPage>;

  beforeEach(() => {
    const modalControllerStub = () => ({});
    const toastControllerStub = () => ({});
    const productsServiceStub = () => ({
      getAll: () => ({ subscribe: () => ({}) }),
    });
    const userServiceStub = () => ({
      getUserData: () => ({ subscribe: () => ({}) }),
    });
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [ProductsPage],
      providers: [
        { provide: ModalController, useFactory: modalControllerStub },
        { provide: ToastController, useFactory: toastControllerStub },
        { provide: ProductsService, useFactory: productsServiceStub },
        { provide: UserService, useFactory: userServiceStub },
      ],
    });
    fixture = TestBed.createComponent(ProductsPage);
    component = fixture.componentInstance;
  });

  it('can load instance', () => {
    expect(component).toBeTruthy();
  });

  describe('ngOnInit', () => {
    it('makes expected calls', () => {
      const userServiceStub: UserService = fixture.debugElement.injector.get(
        UserService
      );
      spyOn(userServiceStub, 'getUserData').and.callThrough();
      component.ngOnInit();
      expect(userServiceStub.getUserData).toHaveBeenCalled();
    });
  });
});
