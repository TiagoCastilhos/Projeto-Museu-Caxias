import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AreaComponent } from './components/home/area/area.component';
import { ObjectsListingComponent } from './components/home/area/objects-listing/objects-listing.component';
import { PieceComponent } from './components/piece/piece.component';
import { IpcService } from './services/ipc.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AreaComponent,
    ObjectsListingComponent,
    PieceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ IpcService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
