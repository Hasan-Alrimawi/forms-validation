import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {

  form!: FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl("", Validators.required),
      pass: new FormControl("", [Validators.required, Validators.minLength(8)]),
      email: new FormControl("", Validators.email)
    }
    )
  }
  get name() { return this.form.get('name')!; }
  get pass() { return this.form.get('pass')!; }
  get email() { return this.form.get('email')!; }
}
