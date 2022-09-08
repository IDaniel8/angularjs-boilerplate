import angular from "angular";
import { ComponentAComponent } from "./componentA.component";
import { LoadingService } from "@services/loading.service";

// prettier-ignore
export const ComponentAModule = angular
  .module("app.component.a", [])

  .component("app.component.a", ComponentAComponent);
