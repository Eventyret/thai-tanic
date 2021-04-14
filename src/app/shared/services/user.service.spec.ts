import { TestBed } from '@angular/core/testing';
import { ToastController } from '@ionic/angular';
import { ApiService } from './api.service';
import { AuthService } from './auth.service';
import { UserService } from './user.service';

describe('UserService', () => {
  let service: UserService;

  beforeEach(() => {
    const toastControllerStub = () => ({ create: (object) => ({}) });
    const apiServiceStub = () => ({ get: (arg) => ({ pipe: () => ({}) }) });
    const authServiceStub = () => ({
      getUserToken: () => ({}),
      logout: () => ({}),
    });
    TestBed.configureTestingModule({
      providers: [
        UserService,
        { provide: ToastController, useFactory: toastControllerStub },
        { provide: ApiService, useFactory: apiServiceStub },
        { provide: AuthService, useFactory: authServiceStub },
      ],
    });
    service = TestBed.inject(UserService);
  });

  it('can load instance', () => {
    expect(service).toBeTruthy();
  });

  describe('getUserData', () => {
    it('makes expected calls', () => {
      const toastControllerStub: ToastController = TestBed.inject(
        ToastController
      );
      const apiServiceStub: ApiService = TestBed.inject(ApiService);
      spyOn(toastControllerStub, 'create').and.callThrough();
      spyOn(apiServiceStub, 'get').and.callThrough();
      service.getUserData();
      expect(apiServiceStub.get).toHaveBeenCalled();
    });
  });
});
