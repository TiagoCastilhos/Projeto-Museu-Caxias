import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { MuseumAreaComponent } from './components/home/museum-area/museum-area.component';
import { ObjectsListingComponent } from './components/home/museum-area/objects-listing/objects-listing.component';
import { PieceComponent } from './components/piece/piece.component';
import { IpcService } from './services/ipc.service';
import { BackButtonComponent } from './components/back-button/back-button.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { ProgressSpinnerComponent } from './components/progress-spinner/progress-spinner.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';  

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MuseumAreaComponent,
    ObjectsListingComponent,
    PieceComponent,
    BackButtonComponent,
    SearchBarComponent,
    ProgressSpinnerComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule
  ],
  providers: [ IpcService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
