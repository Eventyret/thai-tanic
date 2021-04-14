import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
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
  public options: FormlyFormOptions = {};
  model = {} as LoginFieldFormsConfig;
  fields: FormlyFieldConfig[];

  constructor(private fieldConfig: LoginFieldFormsConfig) {}

  ngOnInit(): void {
    this.fields = this.fieldConfig.fields;
  }
}
