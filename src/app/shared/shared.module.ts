import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NameValidationDirective } from './directives/name-validation.directive';
import { CrossValidationDirective } from './directives/cross-validation.directive';



@NgModule({
  declarations: [
    NameValidationDirective,
    CrossValidationDirective,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NameValidationDirective,
  ]
})
export class SharedModule { }
