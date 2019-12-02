import { Component, OnInit, NgZone, OnDestroy } from '@angular/core';
import Area from 'src/app/models/area.model';
import { IpcService } from 'src/app/services/ipc.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  areas: Area[] = []

  constructor(private ipcService: IpcService, private nz: NgZone) {
  }

  ngOnInit() {
    this.ipcService.on('query-result', (event, rows: Area[]) => {
      this.nz.run(() => rows.forEach(r => this.areas.push({ id: r.id, name: r.name, pieces: r.pieces })))
    });

    this.ipcService.send('select-query', ['select * from areas']);
  }
}