import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MovieService } from 'src/app/services/movie.service';
import { Movie } from 'src/app/share/movie.interface';

@Component({
  selector: 'app-watchlist',
  templateUrl: './watchlist.component.html',
  styleUrls: ['./watchlist.component.scss']
})
export class WatchlistComponent implements OnInit {

  public path = '';

  constructor(
    private router: Router,
    public movieService: MovieService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.path = this.location.path();
  }

  onMovieDetail( movie: Movie ) {
    this.router.navigate(['/movie', movie.title ]);
  }
}
