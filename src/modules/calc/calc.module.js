import angular from "angular";
import { CalcComponent } from "./calc.component";
import { ResultModule } from "./result/result.module";

// prettier-ignore
export const CalcModule = angular
  .module("app.calc", [ResultModule.name])

  .config(($stateProvider) => {
    "ngInject";

    $stateProvider
      .state("calc.result", {
        url: "/result?a&b",
        template: "<app.calcresult></app.calcresult>",
      })
  })

  .component("app.calc", CalcComponent);
