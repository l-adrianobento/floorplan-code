import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FooterComponent } from './footer.component'
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    FooterComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [FooterComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class FooterModule { }
