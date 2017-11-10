import { IMovie } from "../../interface/IMovie";
import { Injectable } from "@angular/core";
import { Storage } from "@ionic/storage";

@Injectable()
export class UserPreferenceProvider {
  constructor(private storage: Storage) {
    console.log("Hello UserPreferenceProvider Provider");
  }

  favoriteMovie(movie: IMovie) {
    this.storage.set(movie.id.toString(), JSON.stringify(movie));
  }

  unfavoriteMovie(movie: IMovie) {
    this.storage.remove(movie.id.toString());
  }

  isFavortieMovie(movieId) {
    return this.storage.get(movieId).then(value => (value ? true : false));
  }

  getFavoriteMovies(): Promise<IMovie[]> {
    return new Promise(resolve => {
      let results: IMovie[] = [];
      this.storage.forEach(data => {
        results.push(JSON.parse(data));
      });
      return resolve(results);
    });
  }
}
