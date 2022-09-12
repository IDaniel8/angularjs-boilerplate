import angular from "angular";
import { EpisodesModule } from "./episodes/episodes.module";
import { MoviesComponent } from "./movies.component";
import { SeriesModule } from "./series/series.module";

// prettier-ignore
export const MoviesModule = angular
  .module("app.movies", [SeriesModule.name, EpisodesModule.name])
  .component("app.movies", MoviesComponent);
