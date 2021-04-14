import { Injectable } from '@angular/core';
import { FormlyFieldConfig } from '@ngx-formly/core';

@Injectable({
  providedIn: 'root',
})
export class RegistrationFieldFormsConfig {
  fields: FormlyFieldConfig[] = [];
  constructor() {
    this.fields = [
      {
        validators: {
          validation: [
            { name: 'fieldMatch', options: { errorPath: 'confirmPassword' } },
          ],
        },
        fieldGroup: [
          {
            key: 'email',
            type: 'input',
            templateOptions: {
              type: 'email',
              placeholder: 'Your Email',
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
              placeholder: 'Password',
              required: true,
              minLength: 6,
            },
          },
          {
            key: 'confirmPassword',
            type: 'input',
            templateOptions: {
              type: 'password',
              placeholder: 'Confirm Password',
              required: true,
              minLength: 6,
            },
          },
        ],
      },
    ];
  }
}
