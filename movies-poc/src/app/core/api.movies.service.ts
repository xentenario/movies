import { Injectable, Inject } from '@angular/core';
import { API_CONFIG, ApiConfig } from '../config';

@Injectable({
  providedIn: 'root'
})
export class ApiMoviesService {

  constructor(@Inject(API_CONFIG) config: ApiConfig) {
    console.log(config.api_key);
   }
}
