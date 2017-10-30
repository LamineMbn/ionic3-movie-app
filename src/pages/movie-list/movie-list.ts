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
  movies: IMovie[] = [
    {
      vote_count: 666,
      id: 19404,
      video: false,
      vote_average: 9.1,
      title: "Dilwale Dulhania Le Jayenge",
      popularity: 50.154262,
      poster_path:
        "https://image.tmdb.org/t/p/w185/2gvbZMtV1Zsl7FedJa5ysbpBx2G.jpg",
      original_language: "hi",
      original_title: "Dilwale Dulhania Le Jayenge",
      genre_ids: [35, 18, 10749],
      backdrop_path: "/nl79FQ8xWZkhL3rDr1v2RFFR6J0.jpg",
      adult: false,
      overview:
        "Chaudhry Baldev Singh est un père de famille installé à Londres. Un jour, il reçoit une lettre d'Inde : son meilleur ami lui écrit, lui rappellant la promesse qu'il avait faite deux décennies auparavant de marier leurs enfants. Chaudhry décide alors de tenir sa promesse, mais donne toutefois un mois libre à sa fille tout avant qu'elle ne s'en aille en Inde se marier...",
      release_date: "1995-10-20"
    },
    {
      vote_count: 8482,
      id: 278,
      video: false,
      vote_average: 8.5,
      title: "Les Évadés",
      popularity: 76.107673,
      poster_path:
        "https://image.tmdb.org/t/p/w185/5cIUvCJQ2aNPXRCmXiOIuJJxIki.jpg",
      original_language: "en",
      original_title: "The Shawshank Redemption",
      genre_ids: [18, 80],
      backdrop_path: "/xBKGJQsAIeweesB79KC89FpBrVr.jpg",
      adult: false,
      overview:
        "En 1947, Andy Dufresne, un jeune banquier, est condamné à la prison à vie pour le meurtre de sa femme et de son amant. Ayant beau clamer son innocence, il est emprisonné à Shawshank, le pénitencier le plus sévère de l'Etat du Maine. Il y fait la rencontre de Red, un Noir désabusé, détenu depuis vingt ans. Commence alors une grande histoire d'amitié entre les deux hommes...",
      release_date: "1994-09-23"
    }
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad MovieListPage");
  }

  goToDetail(movie: IMovie) {
    this.navCtrl.push(MovieDetailPage, movie);
  }
}
