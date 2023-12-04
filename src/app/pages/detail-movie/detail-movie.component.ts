import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-detail-movie',
  templateUrl: './detail-movie.component.html',
  styleUrls: ['./detail-movie.component.css']
})
export class DetailMovieComponent implements OnInit {

  public title: string = '';
  public movie: any = [];
  public loading: boolean = true;

  constructor(
    private activatedRoute: ActivatedRoute,
    private movieService: MovieService,
    private router: Router,
    private location: Location
  ) {
      this.activatedRoute.params.subscribe( params => {
        console.log("params ", params);
      });
  }

  ngOnInit(): void {}

  onBack() {
    this.location.back();
  }

}
