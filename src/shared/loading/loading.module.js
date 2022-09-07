import angular from "angular";
import { LoadingComponent } from "./loading.component";

// prettier-ignore
export const LoadingModule = angular
  .module("shared.loading", [])
  .component("shared.loading", LoadingComponent);
