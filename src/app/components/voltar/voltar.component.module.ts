import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { VoltarComponent } from './voltar.component'
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    VoltarComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule
  ],
  exports: [VoltarComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class VoltarModule { }
