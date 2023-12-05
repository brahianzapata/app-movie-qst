import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieService } from 'src/app/services/movie.service';
import { Movie } from 'src/app/share/movie.interface';

@Component({
  selector: 'app-detail-movie',
  templateUrl: './detail-movie.component.html',
  styleUrls: ['./detail-movie.component.css']
})
export class DetailMovieComponent implements OnInit {

  public movie: Movie = {
    title: "",
    description: "",
    rating: undefined,
    duration: "",
    genre: [],
    releasedDate: "",
    trailerLink: ""
  };

  constructor(
    private activatedRoute: ActivatedRoute,
    private movieService: MovieService,
    private router: Router,
    private location: Location,
    public sanitazer: DomSanitizer
  ) {
      this.activatedRoute.params.subscribe( ({title}) => {
        this.movie = movieService.getMovie(title);
      });
  }

  ngOnInit(): void {}

  addFavorite(movie: Movie){
    this.movieService.addFavorite(movie);
  }

  removeFavorite(title: string){
    this.movieService.deleteFavorite(title);
  }

  onBack() {
    this.location.back();
  }

  onHome() {
    this.router.navigate(['/home']);
  }

  getVideoIframe(url: string) {
    var video, results;

    if (url === null) {
        return '';
    }
    results = url.match('[\\?&]v=([^&#]*)');
    video   = (results === null) ? url : results[1];

    return this.sanitazer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + video);
  }

}
