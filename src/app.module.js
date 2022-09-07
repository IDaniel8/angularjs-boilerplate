import angular from "angular";
import constants from "./app.constants";
import uiRouter from "angular-ui-router";
import { AppComponent } from "./app.component";
import { CalcModule } from "@modules/calc/calc.module";
import { HomeModule } from "@modules/home/home.module";
import { LoadingService } from "@services/loading.service";
import { SharedModule } from "@shared/shared.module";
import { uiImage } from "@directives/ui-image.directive";
import "./styles/main.styles.scss";

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
        url: "/",
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

  .run(($rootScope, $state, $stateParams) => {
    "ngInject";

    $rootScope.routeState = $state;
    $rootScope.routeStateParams = $stateParams;
  })

  .constant("constants", constants)

  .service("globalLoadingService", LoadingService)

  .directive("uiImage", uiImage)

  .component("app", AppComponent);
