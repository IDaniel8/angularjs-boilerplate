import EpisodesTemplate from "./episodes.template.html";
import { EpisodesController } from "./episodes.controller";
import "./episodes.styles.scss";

export const EpisodesComponent = {
  bindings: {},
  template: EpisodesTemplate,
  controller: EpisodesController,
  controllerAs: "vm",
  restrict: "E",
};
