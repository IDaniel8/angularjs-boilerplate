import angular from "angular";
import { ComponentBComponent } from "./componentB.component";

// prettier-ignore
export const ComponentBModule = angular
  .module("app.component.b", [])

  .component("app.component.b", ComponentBComponent);
