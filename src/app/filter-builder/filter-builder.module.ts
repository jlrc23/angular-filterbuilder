import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterBuilderComponent } from './filter-builder/filter-builder.component';

@NgModule({
  imports: [CommonModule],
  declarations: [FilterBuilderComponent],
  exports: [FilterBuilderComponent]
})
export class FilterBuilderModule {}
