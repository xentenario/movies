import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_CONFIG, ApiConfig } from '../config';
import { ApiMoviesReturnModel } from '../models/api_movies_return.model';
import {
  switchMap,
  concatAll,
  catchError,
  take,
  map,
  filter,
  tap,
  toArray,
} from 'rxjs/operators';
import { MovieModel } from '../models/movie.model';
import { Observable, of, concat } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiMoviesService {
  constructor(
    @Inject(API_CONFIG) private config: ApiConfig,
    private apiClient: HttpClient
  ) {}

  searchByTitle(title: string) {
    const address = `${this.config.baseUrl}?apikey=${this.config.api_key}&s=${title}&page=${this.config.page}&type=${this.config.search_type}`;
    return this.apiClient.get<ApiMoviesReturnModel>(address).pipe(
      switchMap((res: ApiMoviesReturnModel) =>
        res.Search.map((item: MovieModel) =>
          this.findOne(item.imdbID).pipe(
            switchMap((data) => of(this.toMovieModel(data)))
          )
        )
      ),
      concatAll(),
      toArray()
    );
  }

  findOne(id: string, plot: string = 'short'): Observable<MovieModel> {
    const address = `${this.config.baseUrl}?apikey=${this.config.api_key}&i=${id}&plot=${plot}`;
    return this.apiClient.get<MovieModel>(address);
  }

  toMovieModel(source: any): MovieModel {
    return new MovieModel(
      source.imdbID,
      source.Poster,
      source.Title,
      source.Rated,
      source.Year,
      source.Runtime,
      source.Released,
      source.Plot
    );
  }
}
