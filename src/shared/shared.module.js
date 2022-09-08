import angular from "angular";
import { LoadingModule } from "./loading/loading.module";
import { SidebarModule } from "./sidebar/sidebar.module";

// prettier-ignore
export const SharedModule = angular
  .module("app.shared", [
    SidebarModule.name,
    LoadingModule.name
  ]);
