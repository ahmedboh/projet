import { Component, OnInit } from '@angular/core';
import { VoitureService } from '../voiture.service';

@Component({
  selector: 'app-liste-voiture',
  templateUrl: './liste-voiture.component.html',
  styleUrls: ['./liste-voiture.component.css']
})
export class ListeVoitureComponent implements OnInit {

tabvoitures=[];
  constructor(private service : VoitureService) { }

  ngOnInit() {
    this.tabvoitures=this.service.voitures;
  }

}
