import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Viewer } from 'photo-sphere-viewer';

@Component({
  selector: 'app-visita',
  templateUrl: './visita.page.html',
  styleUrls: ['./visita.page.scss']
})
export class VisitaPage implements OnInit {

  constructor(private location: Location) {}

  async ngOnInit() {

    setTimeout(() => {

      new Viewer({
        container: document.querySelector('#viewer'),
        caption: 'Sala',
        navbar: [
        'autorotate',
        'zoom',
        'caption',
        'fullscreen'
        ],
        panorama: '../../../assets/imgs/sala-cozinha.jpg'
      });
    }, 100)

  }

  back() {
    this.location.back();
  }
 
}
