import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NameValidationDirective } from './name-validation.directive';



@NgModule({
  declarations: [
    NameValidationDirective
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
