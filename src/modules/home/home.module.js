import { HomeComponent } from "./home.component";
import angular from "angular";

// prettier-ignore
export const HomeModule = angular
  .module("app.home", [])
  .component("app.home", HomeComponent);
