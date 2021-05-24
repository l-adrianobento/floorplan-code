import { Component, Inject, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import  circlr  from 'circlr';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.page.html',
  styleUrls: ['./detalhes.page.scss']
})
export class DetalhesPage implements OnInit {
  teste;
  products = {
    "rack": {
      "name": "Martin Rack 1 Porta Basculante 136x39",
      "imgs": [
        "rack/00.png",
        "rack/01.png",
        "rack/02.png",
        "rack/03.png",
        "rack/03.png",
        "rack/04.png",
        "rack/05.png",
        "rack/06.png",
        "rack/07.png",
        "rack/08.png",
        "rack/09.png",
        "rack/10.png",
        "rack/11.png",
        "rack/12.png",
      ]
    }

  }

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private location: Location ) {
  }

  async ngOnInit() {
    
    setTimeout(() => {
      const el = document.querySelector('#circlr');
      this.teste = circlr(el)
        .scroll(true)
    }, 0)
   
  }

  accessItem(link) {
    window.open(link, '_blank');
  }

  change(change) {    
    if(change) {
      this.teste.next();
    }
    else {
      this.teste.prev();
    }
  }

}
