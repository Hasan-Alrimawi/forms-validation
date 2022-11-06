import { Injectable } from "@angular/core";
import { AbstractControl, AsyncValidator, ValidationErrors } from "@angular/forms";
import { catchError, delay, map, observable, Observable, of } from "rxjs";


@Injectable({ providedIn: 'root' })
export class UniqueEmailValidator implements AsyncValidator {
    emails: Observable<string> = new Observable((observable) => {
        observable.next("hasan.alrimawi@exalt.ps");
        observable.next("hasan.rimawi12@gmail.com");
    })

    // = ["hasan.alrimawi@exalt.ps", "hasan.rimawi12@gmail.com"];
    validate(control: AbstractControl): Observable<ValidationErrors | null> {
        console.log("checking");
        return of((['hasan.alrimawi@exalt.ps', "hasan.rimawi12@gmail.com"].includes(control.value)) ? { usedEmail: true } : null
        ).pipe(delay(3000));
    }
}