import { MovieListPage } from "../movie-list/movie-list";
import { Component } from "@angular/core";
import { NavController, NavParams } from "ionic-angular";

/**
 * Generated class for the MyMoviesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: "page-my-movies",
  templateUrl: "my-movies.html"
})
export class MyMoviesPage {
  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad MyMoviesPage");
  }

  searchMovie() {
    this.navCtrl.push(MovieListPage);
  }
}
