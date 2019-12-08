import { Component, OnInit, Input } from '@angular/core';
import Area from 'src/app/models/area.model';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'museum-area',
  templateUrl: './museum-area.component.html',
  styleUrls: ['./museum-area.component.scss']
})
export class MuseumAreaComponent implements OnInit {

  @Input() 
  area: Area

  constructor(private _DomSanitization: DomSanitizer) { }

  ngOnInit() {
  }
}