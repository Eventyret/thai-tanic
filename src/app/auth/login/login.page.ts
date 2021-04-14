import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoadingController, ToastController } from '@ionic/angular';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';
import { of } from 'rxjs';
import { catchError, finalize } from 'rxjs/operators';
import { LoginFieldFormsConfig } from 'src/app/forms/fields/login.fields';
import { AuthUser } from 'src/app/shared/models/auth.model';
import { AuthService } from 'src/app/shared/services/auth.service';
import { version } from '../../../../package.json';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  providers: [LoginFieldFormsConfig],
})
export class LoginPage implements OnInit {
  version: string = version;
  loginForm = new FormGroup({});
  options: FormlyFormOptions = {};
  model = {} as AuthUser;
  fields: FormlyFieldConfig[];

  constructor(
    private fieldConfig: LoginFieldFormsConfig,
    private loadingCtrl: LoadingController,
    private authService: AuthService,
    private toastController: ToastController,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.fields = this.fieldConfig.fields;
  }
  async login(): Promise<void> {
    const loading = await this.loadingCtrl.create({
      message: 'Authenticating...',
      spinner: 'crescent',
      showBackdrop: true,
      cssClass: 'spinner',
    });
    loading.present();
    this.authService
      .login({
        identifier: this.model.email.toLowerCase(),
        password: this.model.password,
      })
      .pipe(
        catchError((err: HttpErrorResponse) => {
          this.loadingCtrl.dismiss();
          this.toastController.create({
            header: err.status === 400 ? 'Whopsy 🤷‍♀️' : 'Oh noes 😱  🤷‍♀️',
            message:
              err.status === 400
                ? 'Username or password is incorrect'
                : 'Seems we have some connection problems, try again later.',
          });
          return of(null);
        }),
        finalize(() => loading.dismiss())
      )
      .subscribe((res) => {
        if (res) {
          this.router.navigateByUrl('/products');
        }
      });
  }
}
