import { Injectable } from '@angular/core';
import { FormlyFieldConfig } from '@ngx-formly/core';

@Injectable({
  providedIn: 'root',
})
export class LoginFieldFormsConfig {
  fields: FormlyFieldConfig[] = [];
  constructor() {
    this.fields = [
      {
        fieldGroup: [
          {
            key: 'email',
            type: 'input',
            templateOptions: {
              type: 'email',
              placeholder: 'Your email',
              required: true,
            },
            modelOptions: {
              updateOn: 'change',
            },
            validators: {
              validation: ['email'],
            },
          },
          {
            key: 'password',
            type: 'input',
            templateOptions: {
              type: 'password',
              placeholder: 'Your Password',
              required: true,
            },
          },
        ],
      },
    ];
  }
}
