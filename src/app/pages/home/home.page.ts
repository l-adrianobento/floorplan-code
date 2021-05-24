import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss']
})
export class HomePage {

  constructor(
    readonly router: Router, 
  ) {}

  accessArea(option){
    this.router.navigate([option]);
  }

}
