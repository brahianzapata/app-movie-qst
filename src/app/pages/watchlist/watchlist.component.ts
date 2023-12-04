import { Location } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-watchlist',
  templateUrl: './watchlist.component.html',
  styleUrls: ['./watchlist.component.css']
})
export class WatchlistComponent implements OnInit {

  public favoritesMovies: any[] = [];
  public path = '';

  constructor(
    private router: Router,
    private movieService: MovieService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.favoritesMovies = this.movieService.moviesLocalStorage;
    this.path = this.location.path();
  }

  onMovieDetail( movie: any ) {
    this.router.navigate(['/movie', movie.title ]);
  }

}
