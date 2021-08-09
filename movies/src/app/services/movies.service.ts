import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import {
  ResponseDeatailsMovie,
  ResponseListMovies,
  SearchMovies,
} from '../interfaces/movies';
import { GENERAL_CONST } from '../utils/const';
@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  constructor(private httpClient: HttpClient) {}

  getTopRatedMovies(): Observable<ResponseListMovies> {
    return this.httpClient.get<ResponseListMovies>(
      `${GENERAL_CONST.BASE_URL_API}3/movie/top_rated?api_key=${GENERAL_CONST.API_KEY}&language=en-US&page=1`
    );
  }
  getDetailsMovie(idMovie: number): Observable<ResponseDeatailsMovie> {
    return this.httpClient.get<ResponseDeatailsMovie>(
      `${GENERAL_CONST.BASE_URL_API}3/movie/${idMovie}?api_key=${GENERAL_CONST.API_KEY}`
    );
  }
  getSearchMovies(nameMovie: string): Observable<SearchMovies> {
    return this.httpClient.get<SearchMovies>(
      `${GENERAL_CONST.BASE_URL_API}3/search/movie?api_key=${GENERAL_CONST.API_KEY}&language=en-US&page=1&include_adult=false&query=${nameMovie}`
    );
  }
}
