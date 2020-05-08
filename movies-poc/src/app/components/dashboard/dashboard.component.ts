import { Component, OnInit } from '@angular/core';
import { ApiMoviesService } from 'src/app/core/api.movies.service';
import { MovieModel } from 'src/app/models/movie.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass'],
})
export class DashboardComponent implements OnInit {
  movies: MovieModel[] = new Array();
  constructor(private api: ApiMoviesService) {}

  ngOnInit(): void {
    this.api.searchByTitle('Batman').subscribe((data: any) => {
      this.movies.push(this.api.toMovieModel(data));
    });
  }
}
