import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { LoadingController } from '@ionic/angular';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';
import { version } from 'node:process';
import { RegistrationFieldFormsConfig } from 'src/app/forms/fields/register.fields';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  providers: [RegistrationFieldFormsConfig],
})
export class RegisterPage implements OnInit {
  version: string = version;
  registrationForm = new FormGroup({});
  options: FormlyFormOptions = {};
  model = {} as any;
  fields: FormlyFieldConfig[];

  constructor(
    private loadingCtrl: LoadingController,
    private fieldConfig: RegistrationFieldFormsConfig
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
  }
}
