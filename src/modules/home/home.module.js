import angular from "angular";
import { ComponentAModule } from "./componentA/componenA.module";
import { ComponentBModule } from "./componentB/componenB.module";
import { HomeComponent } from "./home.component";

// prettier-ignore
export const HomeModule = angular
  .module("app.home", [ComponentAModule.name, ComponentBModule.name])
  .component("app.home", HomeComponent);
