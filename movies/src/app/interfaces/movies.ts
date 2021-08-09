export interface Movies {
    adult: boolean;
    backdrop_path: string;
    genre_ids: Array<number>;
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
    }

export interface ResponseListMovies {
  page: number;
  results: Array<Movies | ResponseDeatailsMovie>;
  total_pages: number;
  total_results: number;
}
export interface ResponseDeatailsMovie {
  backdrop_path: string;
  genres: Array<Genres>;
  id: number;
  original_title: string;
  overview: string;
  poster_path: string;
  release_date: string;
  spoken_languages: Array<SpokenLanguages>;
  tagline: string;
  title: string;
}
export interface Genres {
  id: number;
  name: string;
}
export interface SpokenLanguages {
  english_name: string;
  iso_639_1: string;
  name: string;
}
export interface SearchMovies {
  page: number;
  results: Array<Movies | ResponseDeatailsMovie>;
  total_pages: number;
  total_results: number;
}
