import { SidebarModule } from "./sidebar/sidebar.module";
import angular from "angular";

// prettier-ignore
export const SharedModule = angular
  .module("app.shared", [
    SidebarModule.name
  ]);
