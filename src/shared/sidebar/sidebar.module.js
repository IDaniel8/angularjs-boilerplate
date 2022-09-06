import { SidebarComponent } from "./sidebar.component";
import angular from "angular";

// prettier-ignore
export const SidebarModule = angular
  .module("shared.sidebar", [])
  .component("shared.sidebar", SidebarComponent);
