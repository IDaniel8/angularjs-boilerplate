import ComponentATemplate from "./componentA.template.html";
import { ComponentAController } from "./componentA.controller";
import "./componentA.styles.scss";

export const ComponentAComponent = {
  bindings: {},
  template: ComponentATemplate,
  controller: ComponentAController,
  controllerAs: "vm",
  restrict: "E",
};
