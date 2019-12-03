import { Component, OnInit, NgZone } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import Area from 'src/app/models/area.model';
import Piece from 'src/app/models/piece.model';
import { IpcService } from 'src/app/services/ipc.service';

@Component({
  selector: 'objects-listing',
  styles: [':host { width: 100% }'],
  templateUrl: './objects-listing.component.html',
  styleUrls: ['./objects-listing.component.scss']
})
export class ObjectsListingComponent implements OnInit {
  area: Area = new Area();
  queryStringParameter: string;
  loading: boolean = false;

  constructor(private route: ActivatedRoute, private _DomSanitization: DomSanitizer, private ipcService: IpcService, private nz: NgZone) {
    this.queryStringParameter = route.snapshot.queryParamMap.get("tip");
    this.area.id = route.snapshot.paramMap.get('id');
  }

  ngOnInit() {
    this.ipcService.on('query-result', (event, rows: Piece[]) => {
      this.area.pieces = [];
      this.nz.run(() => {
        rows.forEach(r => this.area.pieces.push(
          {
            id: r.id,
            name: r.name,
            thumbnail: r.thumbnail,
            areaId: r.areaId,
            image: null,
            acquirement: null,
            description: null,
            donator: null,
            order: null,
            origin: null,
            owner: null,
            period: null
          })
        )
        this.loading = false;
      })
    });

    this.loading = true;
    if (this.queryStringParameter && this.queryStringParameter.length > 0)
      this.executeSelectByQueryString();
    else
      this.executeSelectByAreaId();
  }

  executeSelectByAreaId() {
    this.ipcService.send('select-query', [`select id, areaId, name, thumbnail from pieces where areaId = ${this.area.id}`]);
  }

  executeSelectByQueryString() {
    const selectParameter = `'%${this.queryStringParameter}%'`;

    this.ipcService.send('select-query', [`select id, areaId, name, thumbnail from pieces where name like ${selectParameter} or description like ${selectParameter} or owner like ${selectParameter}`]);
  }
}