import { Component, OnInit } from '@angular/core';
import { ResponseListMovies } from './interfaces/movies';
import { MoviesService } from './services/movies.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'movies';

  constructor(private moviesService : MoviesService) {}

  ngOnInit() {
    this.moviesService.getTopRatedMovies().subscribe( (data: ResponseListMovies) => {
      console.log(data);
      
    });
  }

}
