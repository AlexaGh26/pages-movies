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

  getRatedMovies() {
    this.moviesService
      .getTopRatedMovies()
      .subscribe((data: ResponseListMovies) => {
        this.arrayTopRatedMovies = data;
        this.tempArrayMovies = data;
      });
  }

  showMovieDetails(idMovie: number): void {
    this.router.navigate(['movies/details'], {
      queryParams: { id: idMovie },
    });
  }
  handleSearchValue(event: any): void {
    this.valueInput = event.target.value;
  }

  searchMovies(): void {
    this.moviesService.getSearchMovies(this.valueInput).subscribe((data) => {
      this.tempArrayMovies = data;
    });
  }
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

  saveIdMovie(idMovie: number): void {
    if (this.arrFavorites.includes(idMovie) && this.checkShowFavorites) {
      this.arrFavorites = this.removeFavorites(idMovie);
      this.checkShowFavorites = false;
      this.searchFavorites();
      return;
    }
    this.arrFavorites.push(idMovie);
  }
  private removeFavorites(idMovie: number) {
    return this.arrFavorites.filter((id: number) => id !== idMovie);
  }
}
