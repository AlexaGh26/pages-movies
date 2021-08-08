import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { ResponseListMovies } from '../interfaces/movies';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  readonly API ='https://api.themoviedb.org/3/movie/top_rated?api_key=ab0b620db235cadd5da28d87e874f304&language=en-US&page=1';
  constructor(private httpClient : HttpClient) { }
  
  getTopRatedMovies() : Observable<ResponseListMovies> {
    return this.httpClient.get<ResponseListMovies>(this.API);
  }
}
