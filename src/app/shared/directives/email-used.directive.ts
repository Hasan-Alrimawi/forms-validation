import { Directive, forwardRef, Injectable } from "@angular/core";
import { AbstractControl, AsyncValidator, NG_ASYNC_VALIDATORS, NG_VALIDATORS, ValidationErrors, Validator } from "@angular/forms";
import { catchError, delay, map, observable, Observable, of } from "rxjs";


@Injectable({ providedIn: 'root' })
export class UniqueEmailValidator implements AsyncValidator {
    emails: Observable<string> = new Observable((observable) => {
        observable.next("hasan.alrimawi@exalt.ps");
        observable.next("hasan.rimawi12@gmail.com");
    })

    // = ["hasan.alrimawi@exalt.ps", "hasan.rimawi12@gmail.com"];
    validate(control: AbstractControl): Observable<ValidationErrors | null> {
        return of((['hasan.alrimawi@exalt.ps', "hasan.rimawi12@gmail.com"].includes(control.value)) ? { usedEmail: true } : null
        ).pipe(delay(3000));
    }
}


@Directive({
    selector: '[appUniqueEmailValidator]',
    providers: [{ provide: NG_ASYNC_VALIDATORS, useExisting: forwardRef(() => UniqueEmailDirective), multi: true }]
  })
export class UniqueEmailDirective implements AsyncValidator {
    constructor(private validator: UniqueEmailValidator){};

    validate(control: AbstractControl): Observable<ValidationErrors | null> {
        return this.validator.validate(control);
    }
}