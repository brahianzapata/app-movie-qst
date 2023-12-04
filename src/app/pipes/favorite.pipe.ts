import { Pipe, PipeTransform } from '@angular/core';
import { MovieService } from '../services/movie.service';

@Pipe({
  name: 'favorite',
  pure: false
})
export class FavoritePipe implements PipeTransform {

  constructor(private movieService: MovieService){
  }

  transform(title: string): boolean {
    if (this.movieService.searchFavorite(title) === undefined){
      return false;
    }else{
      return true;
    }
  }

}
