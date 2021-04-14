import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { AutoLoginGuard } from './autologin.guard';

describe('AutoLoginGuard', () => {
  let service: AutoLoginGuard;

  beforeEach(() => {
    const routerStub = () => ({ navigateByUrl: string => ({}) });
    const authServiceStub = () => ({ isAuthenticated: () => ({}) });
    TestBed.configureTestingModule({
      providers: [
        AutoLoginGuard,
        { provide: Router, useFactory: routerStub },
        { provide: AuthService, useFactory: authServiceStub }
      ]
    });
    service = TestBed.inject(AutoLoginGuard);
  });

  it('can load instance', () => {
    expect(service).toBeTruthy();
  });

  describe('canActivate', () => {
    it('makes expected calls', () => {
      const routerStub: Router = TestBed.inject(Router);
      const authServiceStub: AuthService = TestBed.inject(AuthService);
      spyOn(routerStub, 'navigateByUrl').and.callThrough();
      spyOn(authServiceStub, 'isAuthenticated').and.callThrough();
      service.canActivate();
      expect(routerStub.navigateByUrl).toHaveBeenCalled();
      expect(authServiceStub.isAuthenticated).toHaveBeenCalled();
    });
  });
});
