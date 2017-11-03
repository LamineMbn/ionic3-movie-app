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
    private toastController: ToastController
  ) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad MovieDetailPage");
    this.movie = this.navParams.data;
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
              this.toast(`You just unfavorite ${this.movie.title}`).present();
              // TODO persist data
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
      // TODO persist data
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
