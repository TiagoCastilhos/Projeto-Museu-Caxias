import { Component, OnInit, NgZone } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import Area from 'src/app/models/area.model';
import Piece from 'src/app/models/piece.model';
import { IpcService } from 'src/app/services/ipc.service';

@Component({
  selector: 'objects-listing',
  templateUrl: './objects-listing.component.html',
  styleUrls: ['./objects-listing.component.scss']
})
export class ObjectsListingComponent implements OnInit {
  area: Area = new Area();

  constructor(private route: ActivatedRoute, private _DomSanitization: DomSanitizer, private ipcService: IpcService, private nz: NgZone) {
    this.area.id = route.snapshot.paramMap.get('id');
  }

  ngOnInit() {
    this.ipcService.on('query-result', (event, rows: Piece[]) => {
      this.area.pieces = [];

      this.nz.run(() => rows.forEach(r => this.area.pieces.push(
        {
          id: r.id,
          name: r.name,
          thumbnail: r.thumbnail,
          areaId: null,
          image: null,
          acquirement: null,
          description: null,
          donator: null,
          order: null,
          origin: null,
          owner: null,
          period: null
        }
      )))
    });

    this.ipcService.send('select-query', [`select id, name, thumbnail from pieces where areaId = ${this.area.id}`]);
  }
}