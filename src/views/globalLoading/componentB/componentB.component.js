import ComponentBTemplate from "./componentB.template.html";
import { ComponentBController } from "./componentB.controller";
import "./componentB.styles.scss";

export const ComponentBComponent = {
  bindings: {},
  template: ComponentBTemplate,
  controller: ComponentBController,
  controllerAs: "vm",
  restrict: "E",
};
