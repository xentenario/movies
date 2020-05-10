import { MovieModel } from './movie.model';

export interface ApiMoviesReturnModel {
  Response: string;
  Search: MovieModel[];
}
