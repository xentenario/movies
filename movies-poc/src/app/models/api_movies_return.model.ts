import { MovieModel } from './movie.model';

export interface ApiMoviesReturnModel {
  Response: boolean;
  Search: MovieModel[];
}
