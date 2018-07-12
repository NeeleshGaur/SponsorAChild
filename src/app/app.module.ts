import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {enableProdMode} from '@angular/core';
enableProdMode();

import { AppComponent } from './app.component';
import { ChildInfoComponent } from './child-info/child-info.component';

@NgModule({
  declarations: [
    AppComponent,
    ChildInfoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
