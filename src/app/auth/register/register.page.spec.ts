import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { RegistrationFieldFormsConfig } from 'src/app/forms/fields/register.fields';
import { AuthService } from 'src/app/shared/services/auth.service';
import { RegisterPage } from './register.page';

describe('RegisterPage', () => {
  let component: RegisterPage;
  let fixture: ComponentFixture<RegisterPage>;

  beforeEach(() => {
    const routerStub = () => ({
      navigateByUrl: (string) => jasmine.createSpy('navigate'),
    });
    const loadingControllerStub = () => ({
      create: (object) => ({ present: () => ({}), dismiss: () => ({}) }),
      dismiss: () => ({}),
    });
    const toastControllerStub = () => ({
      create: (object) => ({ present: () => ({}) }),
    });
    const registrationFieldFormsConfigStub = () => ({ fields: {} });
    const authServiceStub = () => ({
      register: (object) => ({ pipe: () => ({ subscribe: (f) => f({}) }) }),
    });
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [RegisterPage],
      providers: [
        { provide: Router, useFactory: routerStub },
        { provide: LoadingController, useFactory: loadingControllerStub },
        { provide: ToastController, useFactory: toastControllerStub },
        {
          provide: RegistrationFieldFormsConfig,
          useFactory: registrationFieldFormsConfigStub,
        },
        { provide: AuthService, useFactory: authServiceStub },
      ],
    });
    fixture = TestBed.createComponent(RegisterPage);
    component = fixture.componentInstance;
  });

  it('can load instance', () => {
    expect(component).toBeTruthy();
  });

  describe('register', () => {
    it('makes expected calls', () => {
      const loadingControllerStub: LoadingController = fixture.debugElement.injector.get(
        LoadingController
      );

      spyOn(loadingControllerStub, 'create').and.callThrough();
      component.register();

      expect(loadingControllerStub.create).toHaveBeenCalled();
    });
  });
});
