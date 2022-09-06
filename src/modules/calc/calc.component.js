import "./calc.styles.scss";

import { CalcController } from "./calc.controller";
import CalcTemplate from "./calc.template.html";

export const CalcComponent = {
  bindings: {},
  template: CalcTemplate,
  controller: CalcController,
  controllerAs: "vm",
  restrict: "E",
};
