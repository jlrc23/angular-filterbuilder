import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FilterBuilderModule } from './filter-builder/filter-builder.module';

@NgModule({
  imports: [BrowserModule, FormsModule, FilterBuilderModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
