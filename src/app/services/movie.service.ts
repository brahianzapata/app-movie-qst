import { Injectable } from '@angular/core';

const reponseMovies: any[] = [
    {
      title: "Tenet",
      description: "Armed with only one word, Tenet, and fighting for the survival of the entire world, a Protagonist journeys through a twilight world of international espionage on a mission that will unfold in something beyond real time.",
      Rating: 7.8,
      Duration: "2h 30 min",
      Genre: ["Action", "Sci-Fi"],
      releasedDate: "3 September 2020",
      trailerLink: "https://www.youtube.com/watch?v=LdOM0x0XDMo"
    },
    {
      title: "Spider-Man: Into the Spider-Verse",
      description: "Teen Miles Morales becomes the Spider-Man of his universe, and must join with five spiderpowered individuals from other dimensions to stop a threat for all realities.",
      Rating: 8.4,
      Duration: "1h 57min",
      Genre: ["Action", "Animation", "Adventure"],
      releasedDate: "14 December 2018",
      trailerLink: "https://www.youtube.com/watch?v=tg52up16eq0"
    },
    {
      title: "Knives Out",
      description: "A detective investigates the death of a patriarch of an eccentric, combative family.",
      Rating: 7.9,
      Duration: "2h 10min",
      Genre: ["Comedy", "Crime", "Drama"],
      releasedDate: "27 November 2019",
      trailerLink: "https://www.youtube.com/watch?v=qGqiHJTsRkQ"
    },
    {
      title: "Guardians of the Galaxy",
      description: "A group of intergalactic criminals must pull together to stop a fanatical warrior with plans to purge the universe.",
      Rating: 8.0,
      Duration: "2h 1min",
      Genre: ["Action", "Adventure", "Comedy"],
      releasedDate: "1 August 2014",
      trailerLink: "https://www.youtube.com/watch?v=d96cjJhvlMA"
    },
    {
      title: "Avengers: Age of Ultron",
      description: "When Tony Stark and Bruce Banner try to jump-start a dormant peacekeeping program called Ultron, things go horribly wrong and it's up to Earth's mightiest heroes to stop the villainous Ultron from enacting his terrible plan.",
      Rating: 7.3,
      Duration: "2h 21min",
      Genre: ["Action", "Adventure", "Sci-Fi"],
      releasedDate: "1 May 2015",
      trailerLink: "https://www.youtube.com/watch?v=tmeOjFno6Do"
    }
];

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  public moviesLocalStorage: any[] = [];

  constructor() {
    this.loadFavorites();
  }

  getMovies( ): any[] {
    return reponseMovies;
  }

  getMovie(title: string): any {
    return reponseMovies.find(movie => movie.title === title);
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

  addFavorite( hit: any): void{
    this.moviesLocalStorage.push(hit);
    this.saveLocalStorage();
  }

  deleteFavorite( title: string  ): void{
    this.moviesLocalStorage = this.moviesLocalStorage.filter( (movie: any) => movie.title !== title );
    this.saveLocalStorage();
  }

  searchFavorite( title: string ): any {
    return this.moviesLocalStorage.filter( (movie: any) => movie.title === title)[0];
  }

}
