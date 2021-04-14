import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoadingController, ToastController } from '@ionic/angular';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';
import { of } from 'rxjs';
import { catchError, finalize } from 'rxjs/operators';
import { RegistrationFieldFormsConfig } from 'src/app/forms/fields/register.fields';
import { AuthUser } from 'src/app/shared/models/auth.model';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  providers: [RegistrationFieldFormsConfig],
})
export class RegisterPage implements OnInit {
  registrationForm = new FormGroup({});
  options: FormlyFormOptions = {};
  model = {} as AuthUser;
  fields: FormlyFieldConfig[];

  constructor(
    private loadingCtrl: LoadingController,
    private fieldConfig: RegistrationFieldFormsConfig,
    private authService: AuthService,
    private toastCtrl: ToastController,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.fields = this.fieldConfig.fields;
  }
  async register(): Promise<void> {
    const loading = await this.loadingCtrl.create({
      message: 'Authenticating...',
      spinner: 'crescent',
      showBackdrop: true,
      cssClass: 'spinner',
    });
    loading.present();
    this.authService
      .register({
        username: this.model.email.toLowerCase(),
        email: this.model.email.toLowerCase(),
        password: this.model.password,
      })
      .pipe(
        catchError(async (err: HttpErrorResponse) => {
          this.loadingCtrl.dismiss();
          const toast = await this.toastCtrl.create({
            header: 'Whospy  🤷‍♀️',
            message:
              err.status === 400
                ? 'Username already taken'
                : 'Seems we have some connection problems, try again later.',
            duration: 2000,
          });
          await toast.present();
          return of(false);
        }),
        finalize(() => loading.dismiss())
      )
      .subscribe(() => {
        this.router.navigateByUrl('/products');
      });
  }
}
