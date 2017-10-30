import { HttpClientModule } from "@angular/common/http";
import { MovieListPage, MyMoviesPage, MovieDetailPage } from "../pages/page";
import { BrowserModule } from "@angular/platform-browser";
import { ErrorHandler, NgModule } from "@angular/core";
import { IonicApp, IonicErrorHandler, IonicModule } from "ionic-angular";

import { MyApp } from "./app.component";

import { StatusBar } from "@ionic-native/status-bar";
import { SplashScreen } from "@ionic-native/splash-screen";
import { MovieApiProvider } from "../providers/movie-api/movie-api";

@NgModule({
  declarations: [MyApp, MyMoviesPage, MovieListPage, MovieDetailPage],
  imports: [BrowserModule, IonicModule.forRoot(MyApp), HttpClientModule],
  bootstrap: [IonicApp],
  entryComponents: [MyApp, MyMoviesPage, MovieListPage, MovieDetailPage],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    MovieApiProvider
  ]
})
export class AppModule {}
