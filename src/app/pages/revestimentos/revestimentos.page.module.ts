import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RevestimentosPage } from './revestimentos.page'
import { DetalhesRevestimentosPage } from './detalhes-revestimento/detalhes-revestimento.page';
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
    RevestimentosPage,
    DetalhesRevestimentosPage
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
  exports: [RevestimentosPage, DetalhesRevestimentosPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class RevestimentosModule { }
