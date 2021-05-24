import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComparadorPrecosPage } from './comparador-precos.page'
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatRippleModule } from '@angular/material/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { VoltarModule } from '../../components/voltar/voltar.component.module';

@NgModule({
  declarations: [
    ComparadorPrecosPage
  ],
  imports: [
    CommonModule,
    MatExpansionModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatRippleModule,
    VoltarModule
  ],
  exports: [ComparadorPrecosPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ComparadorPrecosModule { }
