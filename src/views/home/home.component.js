import HomeTemplate from "./home.template.html";
import { HomeController } from "./home.controller";
import "./home.styles.scss";

export const HomeComponent = {
  bindings: {},
  template: HomeTemplate,
  controller: HomeController,
  controllerAs: "vm",
  restrict: "E",
};
