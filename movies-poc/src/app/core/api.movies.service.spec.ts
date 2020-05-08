import { TestBed } from '@angular/core/testing';

import { Api.MoviesService } from './api.movies.service';

describe('Api.MoviesService', () => {
  let service: Api.MoviesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Api.MoviesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
