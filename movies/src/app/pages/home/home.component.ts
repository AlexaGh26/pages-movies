import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  ResponseDeatailsMovie,
  ResponseListMovies,
  SearchMovies,
} from 'src/app/interfaces/movies';
import { MoviesService } from 'src/app/services/movies.service';
import { GENERAL_CONST } from 'src/app/utils/const';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  arrayTopRatedMovies!: ResponseListMovies;
  tempArrayMovies!: SearchMovies;
  arrFavorites: Array<number> = [];
  checkShowFavorites = false;
  private valueInput!: string;

  readonly BASE_IMG = GENERAL_CONST.BASE_URL_IMG;

  constructor(private moviesService: MoviesService, private router: Router) {}

  ngOnInit() {
    this.getRatedMovies();
  }
  /**
   * This method calls the service getTopRatedMovies
   */
  getRatedMovies(): void {
    this.moviesService
      .getTopRatedMovies()
      .subscribe((data: ResponseListMovies) => {
        this.arrayTopRatedMovies = data;
        this.tempArrayMovies = data;
      });
  }

  /**
   * This function shows pages with details movie and send id in query param
   * @param idMovie
   */
  showMovieDetails(idMovie: number): void {
    this.router.navigate(['movies/details'], {
      queryParams: { id: idMovie },
    });
  }
  /**
   * This function gets the value from the input
   * @param event input event
   */
  handleSearchValue(event: any): void {
    this.valueInput = event.target.value;
  }

  /**
   * This function searchs the movie typed in the input
   */
  searchMovies(): void {
    this.moviesService.getSearchMovies(this.valueInput).subscribe((data) => {
      this.tempArrayMovies = data;
    });
  }

  /**
   * This function cleans the tempArrayMovies if checkShowFavorites is true
   *
   */
  searchFavorites(): void {
    this.checkShowFavorites = !this.checkShowFavorites;
    this.tempArrayMovies.results = [];
    if (!this.checkShowFavorites) {
      this.getRatedMovies();
      return;
    }
    [...new Set(this.arrFavorites)].map((idMovie: number) => {
      this.moviesService
        .getDetailsMovie(idMovie)
        .subscribe((data: ResponseDeatailsMovie) => {
          this.tempArrayMovies.results.push(data);
        });
    });
  }

  /**
   * This function validates if idMovie exists in arrFavorites and add to favorites
   * @param idMovie
   *
   */
  saveIdMovie(idMovie: number): void {
    if (this.arrFavorites.includes(idMovie) && this.checkShowFavorites) {
      this.arrFavorites = this.removeFavorites(idMovie);
      this.checkShowFavorites = false;
      this.searchFavorites();
      return;
    }
    const isFavorite = this.arrFavorites.some((id) => id === idMovie);
    if (isFavorite) {
      this.arrFavorites = this.removeFavorites(idMovie);
      this.checkShowFavorites = false;
      return;
    }

    this.arrFavorites.push(idMovie);
  }
  /**
   * This function validates the favorites icon color
   * @param idMovie
   * @returns icon color
   */
  validateColor(idMovie: number): string {
    const isFavorite = this.arrFavorites.some((id) => idMovie === id);
    return isFavorite ? 'rgb(248, 149, 165)' : '#ffffff';
  }
  /**
   * This function removes the favorites movies if it exists in arrFavorites
   * @param idMovie
   * @returns Array without idMovie selected
   */
  private removeFavorites(idMovie: number) {
    return this.arrFavorites.filter((id: number) => id !== idMovie);
  }
}
