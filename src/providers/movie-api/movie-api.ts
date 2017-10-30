import { Observable } from "rxjs/Rx";
import { IMovie } from "../../interface/IMovie";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import "rxjs/add/operator/map";

@Injectable()
export class MovieApiProvider {
  private baseUrl: string = "../../assets/api/movies.json";

  movies: IMovie[];

  constructor(public http: HttpClient) {
    console.log("Hello MovieApiProvider Provider");
  }

  getMovies(): Observable<IMovie[]> {
    return this.http.get<IMovie[]>(`${this.baseUrl}`);
  }
}
