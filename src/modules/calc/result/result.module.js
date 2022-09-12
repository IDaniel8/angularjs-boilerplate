import angular from "angular";
import { ResultComponent } from "./result.component";

// prettier-ignore
export const ResultModule = angular
  .module("app.calc.result", [])

  .component("app.calc.result", ResultComponent);
