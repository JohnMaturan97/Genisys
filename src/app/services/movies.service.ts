import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  constructor(private http: HttpClient) {

  }

  getMovies() {
    return this.http.get('https://api.themoviedb.org/3/movie/upcoming?api_key=be9851fb6b6fa84b4634909d0e891b85')
  }
}
