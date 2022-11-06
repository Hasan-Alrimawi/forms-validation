import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveComponent } from './reactive/reactive.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { TemplateComponent } from './template/template.component';



@NgModule({
  declarations: [
    ReactiveComponent,
    TemplateComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
    FormsModule
  ],
  exports: [
    ReactiveComponent,
    TemplateComponent
  ]
})
export class DomainModule { }
