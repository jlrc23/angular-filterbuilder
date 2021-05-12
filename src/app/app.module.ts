import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FilterBuilderComponent } from './filter-builder/filter-builder.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, FilterBuilderComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
