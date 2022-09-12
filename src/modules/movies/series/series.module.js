import angular from "angular";
import { SeriesComponent } from "./series.component";

// prettier-ignore
export const SeriesModule = angular
  .module("app.movies.series", [])
  .component("app.movies.series", SeriesComponent);
