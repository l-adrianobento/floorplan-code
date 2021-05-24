import { Component, Inject } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.page.html',
  styleUrls: ['./rating.page.scss']
})
export class RatingPage {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any ) {
   
  }


}
