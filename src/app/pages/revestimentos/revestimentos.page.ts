import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { DetalhesRevestimentosPage } from './detalhes-revestimento/detalhes-revestimento.page';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-revestimentos',
  templateUrl: './revestimentos.page.html',
  styleUrls: ['./revestimentos.page.scss']
})
export class RevestimentosPage {

  constructor(
    private location: Location,
    public dialog: MatDialog
  ) {}

  openDialog(item) {
    this.dialog.open(DetalhesRevestimentosPage, {
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
