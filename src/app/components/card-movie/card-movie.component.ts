import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-card-movie',
  templateUrl: './card-movie.component.html',
  styleUrls: ['./card-movie.component.css']
})
export class CardMovieComponent implements OnInit {

  @Input() movie: any = {};

  constructor(
    private router: Router,
    private movieService: MovieService
  ) {
  }

  ngOnInit(): void {

  }

  addFavorite(movie: any){
    this.movieService.addFavorite(movie);
  }

  removeFavorite(title: string){
    this.movieService.deleteFavorite(title);
  }

  onMovieDetail() {
    this.router.navigate(['/detail', this.movie.title ]);
  }
}
