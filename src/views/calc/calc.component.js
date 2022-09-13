import CalcTemplate from "./calc.template.html";
import { CalcController } from "./calc.controller";
import "./calc.styles.scss";

export const CalcComponent = {
  bindings: {},
  template: CalcTemplate,
  controller: CalcController,
  controllerAs: "vm",
  restrict: "E",
};
