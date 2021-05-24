import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MoveisPage } from './moveis.page';
import { DetalhesPage } from './detalhes/detalhes.page'
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { MatRippleModule } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSliderModule } from '@angular/material/slider';
import { VoltarModule } from '../../components/voltar/voltar.component.module';

@NgModule({
  declarations: [
    MoveisPage,
    DetalhesPage
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatListModule,
    MatDividerModule,
    MatButtonModule,
    MatRippleModule,
    MatDialogModule,
    MatSliderModule,
    VoltarModule
  ],
  exports: [MoveisPage, DetalhesPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MoveisModule { }
