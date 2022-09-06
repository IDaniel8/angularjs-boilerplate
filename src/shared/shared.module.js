import angular from "angular";
import { SidebarModule } from "./sidebar/sidebar.module";

// prettier-ignore
export const SharedModule = angular
  .module("app.shared", [
    SidebarModule.name
  ]);
