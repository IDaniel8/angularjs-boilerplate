import { SidebarComponent } from "./sidebar.component";
import angular from "angular";
import uiRouter from "angular-ui-router";

// prettier-ignore
export const SidebarModule = angular
  .module("shared.sidebar", [uiRouter])
  .component("shared.sidebar", SidebarComponent);
