import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NameValidationDirective } from './directives/name-validation.directive';
import { CrossValidationDirective } from './directives/cross-validation.directive';
import { UniqueEmailDirective } from './directives/email-used.directive';



@NgModule({
  declarations: [
    NameValidationDirective,
    CrossValidationDirective,
    UniqueEmailDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NameValidationDirective,
    CrossValidationDirective,
    UniqueEmailDirective
  ]
})
export class SharedModule { }
