import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { take, tap, catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { User } from '../models/auth.model';
import { ApiService } from './api.service';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private user = new BehaviorSubject<User>(null);
  user$: Observable<User> = this.user.asObservable();
  constructor(
    private apiService: ApiService,
    private authService: AuthService,
    private toastCtrl: ToastController
  ) {}

  getUserData(): Observable<any> {
    const id = this.authService.getUserToken()?.id;
    return (
      this.apiService
        // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
        .get(environment.apiURL + environment.userEndpoint + id)
        .pipe(
          take(1),
          tap((v) => console.log('data', v)),
          tap((userData: User) => this.user.next(userData)),
          catchError((err) => {
            this.authService.logout();
            this.toastCtrl.create({
              header: 'Oh noes 😱  🤷‍♀️',
              message:
                'Seems we have some connection problems, try again later.',
            });
            return throwError(err);
          })
        )
    );
  }
}
