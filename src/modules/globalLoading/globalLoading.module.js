import angular from "angular";
import { ComponentAModule } from "./componentA/componenA.module";
import { ComponentBModule } from "./componentB/componenB.module";
import { GlobalLoadingComponent } from "./globalLoading.component";

// prettier-ignore
export const GlobalLoadingModule = angular
  .module("app.global.loading", [ComponentAModule.name, ComponentBModule.name])

  .component("app.global.loading", GlobalLoadingComponent);
