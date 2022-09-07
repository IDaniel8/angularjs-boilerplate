import angular from "angular";
import { SidebarComponent } from "./sidebar.component";

// prettier-ignore
export const SidebarModule = angular
  .module("shared.sidebar", [])
  .component("shared.sidebar", SidebarComponent);
