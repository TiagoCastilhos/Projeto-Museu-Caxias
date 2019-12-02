import { Component, OnInit, Input, NgZone } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import Piece from 'src/app/models/piece.model';
import { IpcService } from 'src/app/services/ipc.service';

@Component({
  selector: 'piece',
  templateUrl: './piece.component.html',
  styleUrls: ['./piece.component.scss']
})
export class PieceComponent implements OnInit {
  piece: Piece = new Piece();

  constructor(private route: ActivatedRoute, private _DomSanitization: DomSanitizer, private ipcService: IpcService, private nz: NgZone) {
    this.piece.id = route.snapshot.paramMap.get('pieceId');
  }

  ngOnInit() {
    this.ipcService.on('query-result', (event, rows: Piece[]) => {
      const row = rows[0]
      this.nz.run(() => {
        this.setPieceProperties(row);
      });
    });
    this.ipcService.send('select-query', [`select * from pieces where id = ${this.piece.id}`]);
  }

  setPieceProperties(row: Piece) {
    this.piece.id = row.id;
    this.piece.areaId = row.areaId;
    this.piece.name = row.name;
    this.piece.thumbnail = row.thumbnail;
    this.piece.image = row.image;
    this.piece.acquirement = row.acquirement;
    this.piece.description = row.description;
    this.piece.donator = row.donator;
    this.piece.order = row.order;
    this.piece.origin = row.origin;
    this.piece.owner = row.owner;
    this.piece.period = row.period;
  }
}