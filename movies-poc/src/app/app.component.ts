import { Component } from '@angular/core';
import { ApiMoviesService } from './core/api.movies.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'movies-poc';
  constructor(private api: ApiMoviesService){}
}
