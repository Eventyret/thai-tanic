import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { BehaviorSubject, from, Observable } from 'rxjs';
import { map, switchMap, take } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { AuthResponse, AuthUser, JWTDecoded } from '../models/auth.model';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private userData = new BehaviorSubject(null);

  constructor(
    private apiService: ApiService,
    private jwtHelperService: JwtHelperService,
    private router: Router
  ) {
    this.isAuthenticated();
  }

  login(credentials: AuthUser): Observable<any> {
    return this.apiService
      .post(environment.apiURL + environment.loginEndpoint, credentials)
      .pipe(
        take(1),
        map((res: AuthResponse) => {
          const decoded = this.jwtHelperService.decodeToken(res.jwt);
          this.userData.next(decoded);
          localStorage.setItem(environment.TOKEN_KEY, res.jwt);
          return from(res.jwt);
        })
      );
  }

  register(credentials: AuthUser): Observable<any> {
    return this.apiService
      .post(environment.apiURL + environment.registerEndpoint, credentials)
      .pipe(
        take(1),
        switchMap(() => {
          return this.login({
            identifier: credentials.email,
            password: credentials.password,
          });
        })
      );
  }

  isAuthenticated(): boolean {
    const token: string = localStorage.getItem(environment.TOKEN_KEY);
    const decoded: JWTDecoded = this.jwtHelperService.decodeToken(token);
    const isExpired: boolean = this.jwtHelperService.isTokenExpired(token);
    this.userData.next(decoded);
    if (!isExpired && token) {
      return true;
    } else {
      // Handle refresh tokens here
    }
  }

  logout(): void {
    localStorage.clear();
    this.userData.next(null);
    this.router.navigateByUrl('/');
  }
}
