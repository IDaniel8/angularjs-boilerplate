import "./home.styles.scss";

import { HomeController } from "./home.controller";
import HomeTemplate from "./home.template.html";

export const HomeComponent = {
  bindings: {},
  template: HomeTemplate,
  controller: HomeController,
  controllerAs: "vm",
  restrict: "E",
};
