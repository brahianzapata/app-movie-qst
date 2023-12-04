import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WatchlistComponent } from './pages/watchlist/watchlist.component';
import { HomeComponent } from './pages/home/home.component';
import { NoFoundComponent } from './pages/no-found/no-found.component';
import { CardMovieComponent } from './components/card-movie/card-movie.component';
import { DetailMovieComponent } from './pages/detail-movie/detail-movie.component';
import { FavoritePipe } from './pipes/favorite.pipe';

@NgModule({
  declarations: [
    AppComponent,
    WatchlistComponent,
    HomeComponent,
    NoFoundComponent,
    CardMovieComponent,
    DetailMovieComponent,
    FavoritePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
