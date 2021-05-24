import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-comparador-precos',
  templateUrl: './comparador-precos.page.html',
  styleUrls: ['./comparador-precos.page.scss']
})
export class ComparadorPrecosPage {

  constructor(
    private location: Location 
  ) {}

  accessItem(link) {
    window.open(link, '_blank');
  }

  back() {
    this.location.back();
  }

}
