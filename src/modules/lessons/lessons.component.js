import LessonsTemplate from "./lessons.template.html";
import { LessonsController } from "./lessons.controller";
import "./lessons.styles.scss";

export const LessonsComponent = {
  bindings: {},
  template: LessonsTemplate,
  controller: LessonsController,
  controllerAs: "vm",
  restrict: "E",
};
