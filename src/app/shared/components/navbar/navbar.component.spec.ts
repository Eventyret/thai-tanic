import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AuthService } from '../../services/auth.service';
import { NavbarComponent } from './navbar.component';

describe('NavbarComponent', () => {
  let fixture: ComponentFixture<NavbarComponent>;
  beforeEach(() => {
    const authServiceStub = () => ({
      getUserToken: () => ({}),
      logout: () => ({}),
    });
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [NavbarComponent],
      providers: [{ provide: AuthService, useFactory: authServiceStub }],
    });
    fixture = TestBed.createComponent(NavbarComponent);
  });

  it('can load instance', () => {});
});
