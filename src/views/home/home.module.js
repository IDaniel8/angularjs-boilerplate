import angular from "angular";
import { HomeComponent } from "./home.component";

// prettier-ignore
export const HomeModule = angular
  .module("app.home", [])
  .component("app.home", HomeComponent);
