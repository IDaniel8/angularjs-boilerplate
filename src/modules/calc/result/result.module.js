import angular from "angular";
import { CalcService } from "@services/calc.service";
import { LoadingService } from "@services/loading.service";
import { ResultComponent } from "./result.component";

// prettier-ignore
export const ResultModule = angular
  .module("app.calcresult", [])

  .service("resultCalcService", CalcService)
  .service("resultLoadingService", LoadingService)

  .component("app.calcresult", ResultComponent);
