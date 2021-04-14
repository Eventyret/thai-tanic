import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { LoginPage } from 'src/app/auth/login/login.page';
import { AuthUser } from '../models/auth.model';
import { ApiService } from './api.service';
import { AuthService } from './auth.service';

describe('AuthService', () => {
  let service: AuthService;
  let component: LoginPage

  beforeEach(() => {
    const routerStub = () => ({ navigateByUrl: string => ({}) });
    const jwtHelperServiceStub = () => ({
      decodeToken: jwt => ({}),
      isTokenExpired: token => ({})
    });
    const apiServiceStub = () => ({
      post: (arg, credentials) => ({ pipe: () => ({}) })
    });
    TestBed.configureTestingModule({
      providers: [
        AuthService,
        { provide: Router, useFactory: routerStub },
        { provide: JwtHelperService, useFactory: jwtHelperServiceStub },
        { provide: ApiService, useFactory: apiServiceStub }
      ]
    });
    spyOn(AuthService.prototype, 'isAuthenticated');
    service = TestBed.inject(AuthService);
  });

  it('can load instance', () => {
    expect(service).toBeTruthy();
  });

  describe('login', () => {
    it('makes expected calls', () => {
      const jwtHelperServiceStub: JwtHelperService = TestBed.inject(
        JwtHelperService
      );
      const authUserStub: AuthUser = <any>{};
      const apiServiceStub: ApiService = TestBed.inject(ApiService);
      spyOn(apiServiceStub, 'post').and.callThrough();
      service.login(authUserStub);
      expect(apiServiceStub.post).toHaveBeenCalled();
    });
  });

  describe('register', () => {
    it('makes expected calls', () => {
      const authUserStub: AuthUser = <any>{};
      const apiServiceStub: ApiService = TestBed.inject(ApiService);
      spyOn(apiServiceStub, 'post').and.callThrough();
      service.register(authUserStub);
      expect(apiServiceStub.post).toHaveBeenCalled();
    });
  });

  describe('constructor', () => {
    it('makes expected calls', () => {
      expect(AuthService.prototype.isAuthenticated).toHaveBeenCalled();
    });
  });

  describe('isAuthenticated', () => {
    it('makes expected calls', () => {
      const jwtHelperServiceStub: JwtHelperService = TestBed.inject(
        JwtHelperService
      );
      spyOn(jwtHelperServiceStub, 'decodeToken').and.callThrough();
      spyOn(jwtHelperServiceStub, 'isTokenExpired').and.callThrough();
      (<jasmine.Spy>service.isAuthenticated).and.callThrough();
      service.isAuthenticated();
      expect(jwtHelperServiceStub.decodeToken).toHaveBeenCalled();
      expect(jwtHelperServiceStub.isTokenExpired).toHaveBeenCalled();
    });
  });

  describe('logout', () => {
    it('makes expected calls', () => {
      const routerStub: Router = TestBed.inject(Router);
      spyOn(routerStub, 'navigateByUrl').and.callThrough();
      service.logout();
      expect(routerStub.navigateByUrl).toHaveBeenCalled();
    });
  });
});
