import { UserPreferenceProvider } from "../../providers/user-preference/user-preference";
import { IMovie } from "../../interface/IMovie";
import { Component } from "@angular/core";
import {
  AlertController,
  NavController,
  NavParams,
  Toast,
  ToastController
} from "ionic-angular";

@Component({
  selector: "page-movie-detail",
  templateUrl: "movie-detail.html"
})
export class MovieDetailPage {
  movie: IMovie;
  favorite: boolean = false;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private alertController: AlertController,
    private toastController: ToastController,
    private userPreferenceProvider: UserPreferenceProvider
  ) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad MovieDetailPage");
    this.movie = this.navParams.data;
    this.userPreferenceProvider
      .isFavortieMovie(this.movie.id)
      .then(value => (this.favorite = value));
  }

  toggleFavorite(): void {
    if (this.favorite) {
      let confirm = this.alertController.create({
        title: "Unfavorite?",
        message: "Are you sure you want to unfav this movie?",
        buttons: [
          {
            text: "Yes",
            handler: () => {
              this.favorite = false;
              this.userPreferenceProvider.unfavoriteMovie(this.movie);
              this.toast(`You just unfavorite ${this.movie.title}`).present();
            }
          },
          {
            text: "No"
          }
        ]
      });
      confirm.present();
    } else {
      this.favorite = true;
      this.userPreferenceProvider.favoriteMovie(this.movie);
    }
  }

  toast(message: string): Toast {
    return this.toastController.create({
      message: message,
      position: "bottom",
      showCloseButton: true,
      closeButtonText: "Ok",
      duration: 2000
    });
  }
}
