import { Component, Inject } from '@angular/core';
import { Location } from '@angular/common';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-detalhes-revestimento',
  templateUrl: './detalhes-revestimento.page.html',
  styleUrls: ['./detalhes-revestimento.page.scss']
})
export class DetalhesRevestimentosPage {

  revestimentos = {
    "tijolo": {
      "img": {
        "name": "antik-cafe-marrom.png",
        "height": "105px",
        "width": "115px",
        "alt": "Antik Cafe Marrom",
      },
      "link": "https://www.cec.com.br/pisos-e-revestimentos/revest-para-parede/revestimentos-para-parede-ate-40x90/revestimento-brilhante-borda-bold-antik-cafe-marrom-32x45cm?produto=1359933",
      "name": "Revestimento Brilhante Borda Bold Antik Cafe Marrom 32x45cm",
      "price": "R$ 15,99",
      "especifications": [
        {
          "name": "Altura",
          "value": "32cm"
        },
        {
          "name": "Comprimento",
          "value": "45cm"
        },
        {
          "name": "Área total revestida com esse material",
          "value": "7,35 m²",
          "longText": true,
          "boldText": true
        },
        {
          "name": "Total a pagar<div class='total-info'>(valor por m² x área)</div>",
          "value": "R$ 117,05",
          "longText": true,
          "boldText": true
        },
      ]
    },
    "madeira": {
      "img": {
        "name": "canela-ripado.png",
        "height": "105px",
        "width": "34px",
        "alt": "Canela ripado",
      },
      "link": "https://www.cec.com.br/pisos-e-revestimentos/revest-para-parede/revestimentos-para-parede-ate-40x90/revestimento-esmaltado-borda-reta-decor-canela-ripado-30x90cm?produto=1367346",
      "name": "Revestimento Esmaltado Borda Reta Decor Canela Ripado 30x90cm",
      "price": "R$ 32,99",
      "centerImage": true,
      "especifications": [
        {
          "name": "Altura",
          "value": "30cm"
        },
        {
          "name": "Comprimento",
          "value": "90cm"
        },
        {
          "name": "Área total revestida com esse material",
          "value": "22,60 m²",
          "longText": true,
          "boldText": true
        },
        {
          "name": "Total a pagar<div class='total-info'>(valor por m² x área)</div>",
          "value": "R$ 745,60",
          "longText": true,
          "boldText": true
        },
      ]
    }

  }

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private location: Location ) {
   
  }

  accessItem(link) {
    window.open(link, '_blank');
  }

  back() {
    this.location.back();
  }

}
