import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ProductViewComponent } from './product-view.component';

describe('ProductViewComponent', () => {
  let component: ProductViewComponent;
  let fixture: ComponentFixture<ProductViewComponent>;

  beforeEach(() => {
    const modalControllerStub = () => ({});
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [ProductViewComponent],
      providers: [{ provide: ModalController, useFactory: modalControllerStub }]
    });
    fixture = TestBed.createComponent(ProductViewComponent);
    component = fixture.componentInstance;
  });

  it('can load instance', () => {
    expect(component).toBeTruthy();
  });
});
