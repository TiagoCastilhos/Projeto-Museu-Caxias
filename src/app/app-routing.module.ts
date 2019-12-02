import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ObjectsListingComponent } from './components/home/area/objects-listing/objects-listing.component';
import { PieceComponent } from './components/piece/piece.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'areas/:id',
    component: ObjectsListingComponent
  },
  {
    path: 'areas/:id/pieces/:pieceId',
    component: PieceComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
