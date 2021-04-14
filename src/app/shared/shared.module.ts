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
  minlengthValidationMessage,
} from '../forms/validation/validations';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidemenuComponent } from './components/sidemenu/sidemenu.component';
import { AvatarModule } from 'ngx-avatar';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [NavbarComponent, SidemenuComponent],
  imports: [
    CommonModule,
    IonicModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    AvatarModule,
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
    NavbarComponent,
    SidemenuComponent,
    AvatarModule,
  ],
})
export class SharedModule {}
