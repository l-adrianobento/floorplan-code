import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HeaderComponent } from './header.component';
import { RatingPage } from './rating/rating.page';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    HeaderComponent,
    RatingPage
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    MatIconModule
  ],
  exports: [HeaderComponent, RatingPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HeaderModule { }
