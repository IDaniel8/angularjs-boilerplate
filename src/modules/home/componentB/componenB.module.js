import angular from "angular";
import { ComponentBComponent } from "./componentB.component";
import { LoadingService } from "@services/loading.service";

// prettier-ignore
export const ComponentBModule = angular
  .module("app.component.b", [])

  .service("componentBLoadingService", LoadingService)

  .component("app.component.b", ComponentBComponent);
