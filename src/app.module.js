import "./styles/main.styles.scss";

import { AppComponent } from "./app.component";
import { CalcModule } from "./modules/calc/calc.module";
import { HomeModule } from "./modules/home/home.module";
import { SharedModule } from "./shared/shared.module";
import angular from "angular";
import { uiImage } from "./directives/ui-image.directive";
import uiRouter from "angular-ui-router";

angular
  .module("app", [
    uiRouter,
    SharedModule.name,
    CalcModule.name,
    HomeModule.name,
  ])

  .config(($stateProvider, $locationProvider) => {
    "ngInject";

    $locationProvider.html5Mode(true);
    $stateProvider
      .state("home", {
        url: "/?a&b",
        template: "<app.home></app.home>",
      })
      .state("calc", {
        url: "/calc",
        template: "<app.calc></app.calc>",
      })
      .state("otherwise", {
        url: "*path",
        template: "<strong>no route available</strong>",
      });
  })

  .run(($rootScope) => {
    "ngInject";

    $rootScope.message = "Hello world from rootScope";
  })

  .directive("uiImage", uiImage)
  .component("app", AppComponent);
