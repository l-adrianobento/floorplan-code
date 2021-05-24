import { Component, Inject } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { EspecificacoesPage } from './especificacoes/especificacoes.page'

@Component({
  selector: 'app-fichas-tecnicas',
  templateUrl: './fichas-tecnicas.page.html',
  styleUrls: ['./fichas-tecnicas.page.scss']
})
export class FichasTecnicasPage {

  constructor(
    private location: Location,
    readonly router: Router,
    public dialog: MatDialog  
  ) {}

  openDialog(item) {
    this.dialog.open(EspecificacoesPage, {
      data: {
        item: item
      },
      maxWidth: '100vw',
      maxHeight: '100vh',
      width: '100vw',
      height: '100vh',
      panelClass: 'custom-dialog-container'
    });
  }

  back() {
    this.location.back();
  }

}
