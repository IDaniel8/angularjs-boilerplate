import angular from "angular";
import { SidebarModule } from "./sidebar/sidebar.module";
import { LoadingModule } from "./loading/loading.module";

// prettier-ignore
export const SharedModule = angular
  .module("app.shared", [
    SidebarModule.name,
    LoadingModule.name
  ]);
