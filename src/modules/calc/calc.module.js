import { CalcComponent } from "./calc.component";
import angular from "angular";

// prettier-ignore
export const CalcModule = angular
  .module("app.calc", [])
  .component("app.calc", CalcComponent);
