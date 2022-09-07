import angular from "angular";
import { LoadingService } from "@services/loading.service";
import { ResultComponent } from "./result.component";

// prettier-ignore
export const ResultModule = angular
  .module("app.calcresult", [])

  .service("loadingService", LoadingService)

  .component("app.calcresult", ResultComponent);
