import { Component, OnInit } from '@angular/core';
import { NgModel, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {

  temp = { name: '', password: '', email: '' };
  blackListedNames: string[] = ['hasan'];
  nameNot: string = 'hasan';
  constructor() { }

  ngOnInit(): void {
  }
}
