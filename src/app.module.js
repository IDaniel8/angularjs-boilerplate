import angular from "angular";
import constants from "./app.constants";
import uiGrid from "angular-ui-grid";
import uiRouter from "angular-ui-router";
import { AppComponent } from "./app.component";
import { appRouting } from "./app.routing";
import { CalcService } from "@services/calc.service";
import { LessonsService } from "@services/lessons.service";
import { LoadingFactory } from "@factories/loading.factory";
import { LoadingService } from "@services/loading.service";
import { MoviesService } from "@services/movies.service";
import { SharedModule } from "@shared/shared.module";
import { uiImage } from "@directives/ui-image.directive";
import { ViewsModule } from "@views/views.module";
import "@packages/angular-ui-grid/ui-grid.min.css";

import "./styles/main.styles.scss";

angular
  .module("app", [uiRouter, uiGrid, SharedModule.name, ViewsModule.name])

  .constant("constants", constants)

  .config(($stateProvider, $locationProvider) => {
    "ngInject";

    $locationProvider.html5Mode(true);
    appRouting($stateProvider);
  })

  .run(($rootScope, $state, $stateParams) => {
    "ngInject";

    $rootScope.routeState = $state;
    $rootScope.routeStateParams = $stateParams;
  })

  .service("loadingFactory", LoadingFactory)
  .service("globalLoadingService", LoadingService)
  .service("calcService", CalcService)
  .service("moviesService", MoviesService)
  .service("lessonsService", LessonsService)

  .directive("uiImage", uiImage)

  .component("app", AppComponent);
