import { Component, OnInit } from '@angular/core';
import { ApiMoviesService } from 'src/app/core/api.movies.service';
import { MovieModel } from 'src/app/models/movie.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass'],
})
export class DashboardComponent implements OnInit {
  movies: any;
  constructor(private api: ApiMoviesService) {}

  ngOnInit(): void {
    this.movies = this.api.searchByTitle('Batman');
  }
}
