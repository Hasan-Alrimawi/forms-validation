import { Directive, Input } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator, ValidatorFn } from '@angular/forms';

export function nameExcluder(blackedListedNames: string[]): ValidatorFn {
  return (controller: AbstractControl): ValidationErrors | null => {
    const wrongExists = blackedListedNames.filter((element) => element == controller.value);
    return wrongExists.length != 0 ? { wrong: controller.value } : null;
  }
}

@Directive({
  selector: '[appNameValidation]',
  providers: [{ provide: NG_VALIDATORS, useExisting: NameValidationDirective, multi: true }]
})
export class NameValidationDirective implements Validator {


  @Input('appNameValidation') names: string[] = [];                                                         //hereeee
  constructor() { }

  validate(control: AbstractControl<any, any>): ValidationErrors | null {
    return nameExcluder(this.names);
  }
}
