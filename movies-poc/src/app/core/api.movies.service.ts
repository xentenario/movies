import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_CONFIG, ApiConfig } from '../config';
import { MovieModel } from '../models/movie.model';
import { ApiMoviesReturnModel } from '../models/api_movies_return.model';
import { Observable, ObservableInput } from 'rxjs';
import { switchMap, filter, concatAll } from 'rxjs/operators';

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
      switchMap((data: ApiMoviesReturnModel) => data.Search.map((item: any) => this.findOne(item.imdbID))),
      concatAll()
    );
  }

  findOne(id: string, plot: string = 'short') {
    const address = `${this.config.baseUrl}?apikey=${this.config.api_key}&i=${id}&plot=${plot}`;
    return this.apiClient.get(address);
  }

  toMovieModel(source: any) {
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
