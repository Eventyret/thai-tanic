import { fakeAsync, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';
import { AuthGuard } from './auth.guard';

describe('AuthGuard', () => {
  let service: AuthGuard;

  beforeEach(() => {
    const routerStub = () => ({ navigate: (array) => ({}) });
    const toastControllerStub = () => ({ create: (object) => ({}) });
    const authServiceStub = () => ({ isAuthenticated: () => ({}) });
    TestBed.configureTestingModule({
      providers: [
        AuthGuard,
        { provide: Router, useFactory: routerStub },
        { provide: ToastController, useFactory: toastControllerStub },
        { provide: AuthService, useFactory: authServiceStub },
      ],
    });
    service = TestBed.inject(AuthGuard);
  });

  it('can load instance', () => {
    expect(service).toBeTruthy();
  });

  describe('canActivate', () => {
    it('makes expected calls', fakeAsync(() => {}));
  });
});
