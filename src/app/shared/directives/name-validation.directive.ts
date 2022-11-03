import { Directive, Input, Input } from '@angular/core';
import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

function nameExcluder(blackedListedNames: string[]):ValidatorFn{
  return (controller: AbstractControl): ValidationErrors | null => {
    const wrongExists = blackedListedNames.filter((element) => element == controller.value);
    return wrongExists.length != 0 ? {wrong: controller.value} : null;
  }
}

@Directive({
  selector: '[appNameValidation]'
})
export class NameValidationDirective {

  @Input()                                                          //hereeee
  constructor() { }

}
