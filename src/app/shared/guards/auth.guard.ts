import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { take, map } from 'rxjs/operators';
import {
  AlertController,
  LoadingController,
  ToastController,
} from '@ionic/angular';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private router: Router,
    private toastCtrl: ToastController
  ) {}
  canActivate(): boolean {
    if (!this.authService.isAuthenticated()) {
      this.toastCtrl.create({
        color: 'error',
        header: 'Hello there',
        message: 'Seems you got caught sneaking around',
      });
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }
}
