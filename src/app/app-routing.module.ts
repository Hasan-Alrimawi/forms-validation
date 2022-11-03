import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DomainModule } from './domain/domain.module';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot([
    {path: '', component: DomainModule}
  ])],
  exports: [RouterModule]
})
export class AppRoutingModule { }
