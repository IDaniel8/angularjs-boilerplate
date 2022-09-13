import ResultTemplate from "./result.template.html";
import { ResultController } from "./result.controller";
import "./result.styles.scss";

export const ResultComponent = {
  bindings: {},
  template: ResultTemplate,
  controller: ResultController,
  controllerAs: "vm",
  restrict: "E",
};
