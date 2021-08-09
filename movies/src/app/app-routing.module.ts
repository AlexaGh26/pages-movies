import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowDetailsMovieComponent } from './components/show-details-movie/show-details-movie.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'movies', component: HomeComponent },
  { path: 'movies/details', component: ShowDetailsMovieComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
