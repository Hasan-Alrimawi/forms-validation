import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { nameExcluder } from '../../shared/directives/name-validation.directive';
import { privacyKeeper } from '../../shared/directives/cross-validation.directive';
import { UniqueEmailValidator } from 'src/app/shared/directives/email-used.directive';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {

  blackListedNames: string[] = ['hasan'];
  form!: FormGroup;
  constructor( private usedEmailValidator: UniqueEmailValidator ) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      'name': new FormControl("", [Validators.required, nameExcluder(this.blackListedNames)]),
      'pass': new FormControl("", [Validators.required, Validators.minLength(8)]),
      'email': new FormControl("", Validators.email, this.usedEmailValidator.validate.bind(this.usedEmailValidator))
    }, { validators: privacyKeeper });
  }
  get name() { return this.form.get('name')!; }
  get pass() { return this.form.get('pass')!; }
  get email() { return this.form.get('email')!; }
}
