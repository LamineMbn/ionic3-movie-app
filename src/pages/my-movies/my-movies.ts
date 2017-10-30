import { MovieListPage } from "../movie-list/movie-list";
import { Component } from "@angular/core";
import { NavController, NavParams } from "ionic-angular";

@Component({
  selector: "page-my-movies",
  templateUrl: "my-movies.html"
})
export class MyMoviesPage {
  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad MyMoviesPage");
  }

  findMovie() {
    this.navCtrl.push(MovieListPage);
  }
}
