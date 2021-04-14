import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyIonicModule } from '@ngx-formly/ionic';
import { IonicModule } from '@ionic/angular';
import {
  emailValidator,
  fieldMatchValidator,
  emailValidationMessage,
  requireValidationMessage,
} from '../forms/validation/validations';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    IonicModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    FormlyModule.forRoot({
      validators: [
        { name: 'email', validation: emailValidator },
        { name: 'fieldMatch', validation: fieldMatchValidator },
      ],
      validationMessages: [
        { name: 'email', message: emailValidationMessage },
        { name: 'required', message: requireValidationMessage },
        { name: 'minlength', message: minlengthValidationMessage },
      ],
    }),
    FormlyIonicModule,
  ],
  exports: [
    IonicModule,
    FormsModule,
    ReactiveFormsModule,
    FormlyModule,
    FormlyIonicModule,
  ],
})
export class SharedModule {}
