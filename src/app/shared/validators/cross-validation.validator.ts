import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export const privacyKeeper: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
    const password= control.get('pass');
    const email = control.get('email');
    return true ? { privacyBreached: true } : null;
}