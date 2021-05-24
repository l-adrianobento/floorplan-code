import { Component, OnInit } from '@angular/core';
import { RatingPage } from './rating/rating.page';
import { MatDialog } from '@angular/material/dialog';
import { NgLocaleLocalization } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  counter = 0;

  constructor(public dialog: MatDialog ) {}

  async ngOnInit() {

  }

  showRating() {
    if(this.counter < 10) {
      this.counter ++
    }
    else {
      this.dialog.open(RatingPage);
      this.counter = 0;
    }
  }

}

