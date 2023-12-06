import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { WatchlistComponent } from './pages/watchlist/watchlist.component';
import { NoFoundComponent } from './pages/no-found/no-found.component';
import { DetailMovieComponent } from './pages/detail-movie/detail-movie.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'watchlist',
    component: WatchlistComponent
  },
  {
    path: 'no-found',
    component: NoFoundComponent
  },
  {
    path: 'detail/:title',
    component: DetailMovieComponent
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/no-found'
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
