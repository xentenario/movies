import { Component, OnInit, OnDestroy } from '@angular/core';
import { ApiMoviesService } from 'src/app/core/api.movies.service';
import { MovieModel } from 'src/app/models/movie.model';
import { Observable, Subscription } from 'rxjs';
import { ToolbarService } from '../toolbar/toolbar.service';
import { ToolbarItemModel } from '../toolbar/toolbaritem.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass'],
})
export class DashboardComponent implements OnInit, OnDestroy {
  movies: Observable<MovieModel[]>;
  toolbarItems: ToolbarItemModel[] = [
    { label: '2010\'s', filterValue: 2010 },
    { label: '2000\'s', filterValue: 2000 },
    { label: '1990\'s', filterValue: 1990 },
    { label: '1980\'s', filterValue: 1980 },
  ];
  private toolbarSubscription$: Subscription;
  filter: number;

  constructor(
    private api: ApiMoviesService,
    private toolbarService: ToolbarService
  ) {}

  ngOnInit(): void {
    this.movies = this.api.searchByTitle('Batman');
    this.toolbarSubscription$ = this.toolbarService.itemWasClicked.subscribe(
      (data: ToolbarItemModel) => this.refresh(data)
    );
  }

  refresh(data: ToolbarItemModel) {
    if (data.isSelected) {
      this.filter = data.filterValue;
    } else {
      this.filter = null;
    }
  }

  ngOnDestroy(): void {
    this.toolbarSubscription$.unsubscribe();
  }
}
