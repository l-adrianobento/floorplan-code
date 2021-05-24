import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FichasTecnicasPage } from './fichas-tecnicas.page';
import { EspecificacoesPage } from './especificacoes/especificacoes.page';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatRippleModule } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';
import { VoltarModule } from '../../components/voltar/voltar.component.module';

@NgModule({
  declarations: [
    FichasTecnicasPage,
    EspecificacoesPage
  ],
  imports: [
    CommonModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatRippleModule,
    MatDialogModule,
    VoltarModule
  ],
  exports: [FichasTecnicasPage, EspecificacoesPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class FichasTecnicasModule { }
