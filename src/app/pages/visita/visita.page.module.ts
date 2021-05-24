import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { VisitaPage } from './visita.page'
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { VoltarModule } from '../../components/voltar/voltar.component.module';

@NgModule({
  declarations: [
    VisitaPage
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    VoltarModule
  ],
  exports: [VisitaPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class VisitaModule { }
