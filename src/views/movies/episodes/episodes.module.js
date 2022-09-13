import angular from "angular";
import { EpisodesComponent } from "./episodes.component";

// prettier-ignore
export const EpisodesModule = angular
  .module("app.movies.episodes", [])
  .component("app.movies.episodes", EpisodesComponent);
