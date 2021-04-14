import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { BehaviorSubject, from, Observable } from 'rxjs';
import { map, switchMap, take } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { AuthResponse, AuthUser } from '../models/auth.model';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private loggedIn = new BehaviorSubject<boolean>(null);
  isLoggedIn$: Observable<boolean> = this.loggedIn.asObservable();
  constructor(private apiService: ApiService, private storage: Storage) {}

  login(credentials: AuthUser): Observable<any> {
    return this.apiService
      .post(environment.apiURL + environment.loginEndpoint, credentials)
      .pipe(
        take(1),
        map((res: AuthResponse) => {
          return res.jwt;
        }),
        switchMap((token) => {
          this.loggedIn.next(true);
          const token$ = from(this.storage.set(environment.TOKEN_KEY, token));
          localStorage.setItem(environment.TOKEN_KEY, token);
          return token$;
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
}
