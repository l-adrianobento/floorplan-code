import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { DetalhesPage } from './detalhes/detalhes.page';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-moveis',
  templateUrl: './moveis.page.html',
  styleUrls: ['./moveis.page.scss']
})
export class MoveisPage implements OnInit {

  constructor(private location: Location, 
    public dialog: MatDialog  ) {}

  async ngOnInit() {
  }

  openDialog(item) {
    this.dialog.open(DetalhesPage, {
      data: {
        item: item
      },

    });
  }
 
}
