import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { MovieService } from 'src/app/services/movie.service';
import { Movie } from 'src/app/share/movie.interface';

@Component({
  selector: 'app-card-movie',
  templateUrl: './card-movie.component.html',
  styleUrls: ['./card-movie.component.scss']
})
export class CardMovieComponent {

  @Input() movie: Movie = {
    title: "",
    description: "",
    rating: 0,
    duration: "",
    genre: [],
    releasedDate: "",
    trailerLink: ""
  };

  constructor(
    private router: Router,
    private movieService: MovieService
  ) { }

  addFavorite(movie: Movie){
    this.movieService.addFavorite(movie);
  }

  removeFavorite(title: string){
    this.movieService.deleteFavorite(title);
  }

  onMovieDetail() {
    this.router.navigate(['/detail', this.movie.title ]);
  }
}
