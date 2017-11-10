import { MovieDetailPage } from "../movie-detail/movie-detail";
import { UserPreferenceProvider } from "../../providers/user-preference/user-preference";
import { IMovie } from "../../interface/IMovie";
import { MovieListPage } from "../movie-list/movie-list";
import { Component } from "@angular/core";
import { NavController, NavParams } from "ionic-angular";

@Component({
  selector: "page-my-movies",
  templateUrl: "my-movies.html"
})
export class MyMoviesPage {
  favoriteMovies: IMovie[];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private userPreferenceProvider: UserPreferenceProvider
  ) {}

  ionViewDidEnter() {
    console.log("ionViewDidEnter MyMoviesPage");
    this.initFavoriteMovies();
  }

  initFavoriteMovies() {
    this.userPreferenceProvider
      .getFavoriteMovies()
      .then(favs => (this.favoriteMovies = favs));
  }

  goToDetail(movie: IMovie) {
    this.navCtrl.push(MovieDetailPage, movie);
  }

  findMovie() {
    this.navCtrl.push(MovieListPage);
  }

  getColorFromRating(rating: number): string {
    let colorRating = "average";

    if (rating > 6.0) {
      colorRating = "good";
    } else if (rating < 4.0) {
      colorRating = "bad";
    }

    return colorRating;
  }
}
