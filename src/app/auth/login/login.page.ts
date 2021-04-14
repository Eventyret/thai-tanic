import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { LoadingController } from '@ionic/angular';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';
import { LoginFieldFormsConfig } from 'src/app/forms/fields/login.fields';
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
  model = {} as LoginFieldFormsConfig;
  fields: FormlyFieldConfig[];

  constructor(
    private fieldConfig: LoginFieldFormsConfig,
    private loadingCtrl: LoadingController
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
  }
}
