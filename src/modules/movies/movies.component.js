import MoviesTemplate from "./movies.template.html";
import { MoviesController } from "./movies.controller";
import "./movies.styles.scss";

export const MoviesComponent = {
  bindings: {},
  template: MoviesTemplate,
  controller: MoviesController,
  controllerAs: "vm",
  restrict: "E",
};
