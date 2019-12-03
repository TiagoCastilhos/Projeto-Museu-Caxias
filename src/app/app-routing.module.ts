import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PieceComponent } from './components/piece/piece.component';
import { ObjectsListingComponent } from './components/home/museum-area/objects-listing/objects-listing.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'areas',
    component: ObjectsListingComponent
  },
  {
    path: 'areas/:id',
    component: ObjectsListingComponent
  },
  {
    path: 'pieces/:pieceId',
    component: PieceComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
