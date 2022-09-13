import SeriesTemplate from "./series.template.html";
import { SeriesController } from "./series.controller";
import "./series.styles.scss";

export const SeriesComponent = {
  bindings: {},
  template: SeriesTemplate,
  controller: SeriesController,
  controllerAs: "vm",
  restrict: "E",
};
