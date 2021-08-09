import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ResponseDeatailsMovie } from 'src/app/interfaces/movies';
import { MoviesService } from 'src/app/services/movies.service';
import { GENERAL_CONST } from 'src/app/utils/const';

@Component({
  selector: 'app-show-details-movie',
  templateUrl: './show-details-movie.component.html',
  styleUrls: ['./show-details-movie.component.scss'],
})
export class ShowDetailsMovieComponent implements OnInit {
  detailsMovie!: ResponseDeatailsMovie;
  readonly BASE_IMG = GENERAL_CONST.BASE_URL_IMG;

  constructor(
    private readonly moviesServices: MoviesService,
    private readonly route: ActivatedRoute,
    private readonly router: Router
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((param) => {
      this.moviesServices
        .getDetailsMovie(param.id)
        .subscribe((data: ResponseDeatailsMovie) => {
          this.detailsMovie = data;
        });
    });
  }

  backHome(): void {
    this.router.navigate(['movies']);
  }
}
