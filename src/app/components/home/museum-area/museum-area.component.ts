import { Component, OnInit, Input } from '@angular/core';
import Area from 'src/app/models/area.model';

@Component({
  selector: 'museum-area',
  templateUrl: './museum-area.component.html',
  styleUrls: ['./museum-area.component.scss']
})
export class MuseumAreaComponent implements OnInit {

  @Input() 
  area: Area

  constructor() { }

  ngOnInit() {
  }

}