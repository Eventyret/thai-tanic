import { AbstractControl, FormControl, ValidationErrors } from '@angular/forms';

export function requireValidationMessage(): string {
  return `This field is required`;
}

export function emailValidationMessage(): string {
  return 'Must be a valid e-mail';
}

export function fieldMatchValidator(
  control: AbstractControl
): ValidationErrors {
  const { password, confirmPassword } = control.value;

  // avoid displaying the message error when values are empty
  if (!confirmPassword || !password) {
    return null;
  }

  if (confirmPassword === password) {
    return null;
  }

  return { fieldMatch: { message: 'Password Not Matching' } };
}
// Custom Validators

export function emailValidator(control: FormControl): ValidationErrors {
  return !control.value || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(control.value)
    ? null
    : { email: true };
}
