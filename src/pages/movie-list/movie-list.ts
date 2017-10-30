import { MovieApiProvider } from "../../providers/movie-api/movie-api";
import { MovieDetailPage } from "../movie-detail/movie-detail";
import { IMovie } from "../../interface/IMovie";
import { Component } from "@angular/core";
import { NavController, NavParams } from "ionic-angular";

/**
 * Generated class for the MovieListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: "page-movie-list",
  templateUrl: "movie-list.html"
})
export class MovieListPage {
  movies: IMovie[];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private movieApiProvider: MovieApiProvider
  ) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad MovieListPage");
    this.initMovies();
  }

  initMovies(): void {
    this.movieApiProvider.getMovies().subscribe(data => (this.movies = data));
  }

  goToDetail(movie: IMovie) {
    this.navCtrl.push(MovieDetailPage, movie);
  }
}
