import { Injectable } from '@angular/core';
import { Movie } from '../share/movie.interface';

const responseMovies: Movie[] = [
    {
      title: "Tenet",
      description: "Armed with only one word, Tenet, and fighting for the survival of the entire world, a Protagonist journeys through a twilight world of international espionage on a mission that will unfold in something beyond real time.",
      rating: 7.8,
      duration: "2h 30 min",
      genre: ["Action", "Sci-Fi"],
      releasedDate: "3 September 2020",
      trailerLink: "https://www.youtube.com/watch?v=LdOM0x0XDMo"
    },
    {
      title: "Spider-Man: Into the Spider-Verse",
      description: "Teen Miles Morales becomes the Spider-Man of his universe, and must join with five spiderpowered individuals from other dimensions to stop a threat for all realities.",
      rating: 8.4,
      duration: "1h 57min",
      genre: ["Action", "Animation", "Adventure"],
      releasedDate: "14 December 2018",
      trailerLink: "https://www.youtube.com/watch?v=tg52up16eq0"
    },
    {
      title: "Knives Out",
      description: "A detective investigates the death of a patriarch of an eccentric, combative family.",
      rating: 7.9,
      duration: "2h 10min",
      genre: ["Comedy", "Crime", "Drama"],
      releasedDate: "27 November 2019",
      trailerLink: "https://www.youtube.com/watch?v=qGqiHJTsRkQ"
    },
    {
      title: "Guardians of the Galaxy",
      description: "A group of intergalactic criminals must pull together to stop a fanatical warrior with plans to purge the universe.",
      rating: 8.0,
      duration: "2h 1min",
      genre: ["Action", "Adventure", "Comedy"],
      releasedDate: "1 August 2014",
      trailerLink: "https://www.youtube.com/watch?v=d96cjJhvlMA"
    },
    {
      title: "Avengers: Age of Ultron",
      description: "When Tony Stark and Bruce Banner try to jump-start a dormant peacekeeping program called Ultron, things go horribly wrong and it's up to Earth's mightiest heroes to stop the villainous Ultron from enacting his terrible plan.",
      rating: 7.3,
      duration: "2h 21min",
      genre: ["Action", "Adventure", "Sci-Fi"],
      releasedDate: "1 May 2015",
      trailerLink: "https://www.youtube.com/watch?v=tmeOjFno6Do"
    }
];

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  public moviesLocalStorage: Movie[] = [];

  constructor() {
    this.loadFavorites();
  }

  getMoviesSortBy(sortBy?: string): Movie[] {
    switch (sortBy) {
      case 'title':
        const sortedMoviesByTitle = responseMovies.sort((a, b) => a.title.localeCompare(b.title));
        return sortedMoviesByTitle;

      case 'release_date':
        const sortedMoviesByDate = responseMovies.sort((a, b) => a.releasedDate.localeCompare(b.releasedDate));
        return sortedMoviesByDate;

      default:
        return responseMovies;
    }
  }

  getMovie(title: string): Movie {
    return responseMovies.find(movie => movie.title === title)!;
  }

  /* CRUD de los favoritos */

  loadFavorites(): void{
    if (localStorage.getItem('favoritesMovies')){
      this.moviesLocalStorage = JSON.parse(localStorage.getItem('favoritesMovies')  || '{}');
    }else{
      this.moviesLocalStorage = [];
    }
  }

  saveLocalStorage(): void{
    localStorage.setItem('favoritesMovies', JSON.stringify(this.moviesLocalStorage));
    this.loadFavorites();
  }

  addFavorite( movie: Movie): void{
    this.moviesLocalStorage.push(movie);
    this.saveLocalStorage();
  }

  deleteFavorite( title: string  ): void{
    this.moviesLocalStorage = this.moviesLocalStorage.filter( (movie: Movie) => movie.title !== title );
    this.saveLocalStorage();
  }

  searchFavorite( title: string ): Movie {
    return this.moviesLocalStorage.filter( (movie: Movie) => movie.title === title)[0];
  }

}
