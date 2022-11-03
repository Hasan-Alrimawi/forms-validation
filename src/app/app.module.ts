import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DomainModule } from './domain/domain.module';
import { ReactiveComponent } from './domain/reactive/reactive.component';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DomainModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
