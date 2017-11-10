import { MovieApiProvider } from "../../providers/movie-api/movie-api";
import { MovieDetailPage } from "../movie-detail/movie-detail";
import { IMovie } from "../../interface/IMovie";
import { Component } from "@angular/core";
import { NavController, NavParams } from "ionic-angular";
import * as _ from "lodash";

@Component({
  selector: "page-movie-list",
  templateUrl: "movie-list.html"
})
export class MovieListPage {
  movies: IMovie[];
  filtredMovie: IMovie[];
  displayGrid: boolean = true;
  queryText: string;

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
    this.movieApiProvider.getMovies().subscribe(data => {
      this.movies = data;
      this.filtredMovie = data;
    });
  }

  goToDetail(movie: IMovie) {
    this.navCtrl.push(MovieDetailPage, movie);
  }

  changeDisplay() {
    this.displayGrid = !this.displayGrid;
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

  filterMovie() {
    let filtredList = _.filter(this.movies, movie =>
      movie.title.toLowerCase().includes(this.queryText.toLowerCase())
    );
    this.filtredMovie = filtredList.length ? filtredList : this.movies;
  }

  // updateTeams(){
  //   let queryTextLower = this.queryText.toLowerCase();
  //   let filteredTeams = [];
  //   _.forEach(this.allTeamDivisions, td => {
  //     let teams = _.filter(td.divisionTeams, t => (<any>t).name.toLowerCase().includes(queryTextLower));
  //     if (teams.length) {
  //       filteredTeams.push({ divisionName: td.divisionName, divisionTeams: teams });
  //     }
  //   });

  //   this.teams = filteredTeams;
  // }
}
