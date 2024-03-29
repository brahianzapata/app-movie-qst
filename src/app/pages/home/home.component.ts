import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MovieService } from '../../services/movie.service';
import { Location } from '@angular/common';
import { Movie } from 'src/app/share/movie.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public movies: Movie[] = [];
  public path = '';

  constructor(
    private router: Router,
    private movieService: MovieService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.movies = this.movieService.getMoviesSortBy();
    this.path = this.location.path();
  }

  onMovieDetail( movie: Movie ) {
    this.router.navigate(['/movie', movie.title ]);
  }

  sortByChanged(event: Event): void {
    const selectedValue = (event.target as HTMLSelectElement).value;

    this.movies = this.movieService.getMoviesSortBy(selectedValue);
  }
}
