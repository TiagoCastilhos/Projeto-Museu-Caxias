import { Component, OnInit, Input } from '@angular/core';
import Area from 'src/app/models/area.model';

@Component({
  selector: 'area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.scss']
})
export class AreaComponent implements OnInit {

  @Input() 
  area: Area

  constructor() { }

  ngOnInit() {
  }

}