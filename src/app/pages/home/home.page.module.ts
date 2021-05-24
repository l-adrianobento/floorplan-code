import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HomePage } from './home.page'
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatRippleModule } from '@angular/material/core';

@NgModule({
  declarations: [
    HomePage
  ],
  imports: [
    CommonModule,
    MatListModule,
    MatIconModule,
    MatDividerModule,
    MatRippleModule
  ],
  exports: [HomePage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomeModule { }
