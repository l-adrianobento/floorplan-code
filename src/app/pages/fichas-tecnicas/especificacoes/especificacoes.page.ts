import { Component, Inject } from '@angular/core';
import { Location } from '@angular/common';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-especificacoes',
  templateUrl: './especificacoes.page.html',
  styleUrls: ['./especificacoes.page.scss']
})
export class EspecificacoesPage {

  products = {
    "geladeira": {
      "img": {
        "name": "geladeira-brastemp.png",
        "height": "130px",
        "width": "50px",
        "alt": "Geladeira Brastemp",
      },
      "link": "https://www.brastemp.com.br/geladeira-brastemp-frost-free-443-litros-bre57ak/p",
      "name": "Frost Free Inverse 443 litros cor Inox com Turbo Ice - Brastemp",
      "price": "R$ 3.324,05",
      "especifications": [
        {
          "name": "Altura",
          "value": "1,8cm"
        },
        {
          "name": "Largura",
          "value": "72,5cm"
        },
        {
          "name": "Profundidade",
          "value": "70,1cm"
        },
        {
          "name": "Portas",
          "value": "2"
        },
        {
          "name": "Degelo",
          "value": "Frost Free"
        },
        {
          "name": "Cor",
          "value": "Branco e Evox"
        },
        {
          "name": "Voltagem",
          "value": "127 V,220 V"
        },
        {
          "name": "Capacidade total",
          "value": "443 litros"
        },

      ]

    },
    "microondas": {

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
