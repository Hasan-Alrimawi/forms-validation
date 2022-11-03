import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveComponent } from './reactive/reactive.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ReactiveComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  exports: [
    ReactiveComponent,
  ]
})
export class DomainModule { }
