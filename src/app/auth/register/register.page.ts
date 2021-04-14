import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { LoadingController } from '@ionic/angular';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';
import { version } from 'node:process';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  version: string = version;
  loginForm = new FormGroup({});
  options: FormlyFormOptions = {};
  model = {} as any;
  fields: FormlyFieldConfig[];

  constructor(private loadingCtrl: LoadingController) {}

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
