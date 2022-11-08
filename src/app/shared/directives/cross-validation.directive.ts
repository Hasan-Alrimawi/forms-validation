import { Directive } from '@angular/core';

import { AbstractControl, FormControl, NG_VALIDATORS, ValidationErrors, Validator, ValidatorFn } from "@angular/forms";

export const privacyKeeper: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
  const pass = control.get('pass');
  const email = control.get('email');

  return email?.value?.includes(pass?.value) ? { privacyBreached: true } : null;
};


@Directive({
  selector: '[appCrossValidation]',
  providers: [{ provide: NG_VALIDATORS, useExisting: CrossValidationDirective, multi: true }]
})
export class CrossValidationDirective implements Validator{

  validate(control: AbstractControl): ValidationErrors | null {
    return privacyKeeper(control);
  }

}
