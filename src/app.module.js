import angular from "angular";
import constants from "./app.constants";
import uiRouter from "angular-ui-router";
import { AppComponent } from "./app.component";
import { appRouting } from "./app.routing";
import { CalcModule } from "@modules/calc/calc.module";
import { CalcService } from "@services/calc.service";
import { GlobalLoadingModule } from "@modules/globalLoading/globalLoading.module";
import { HomeModule } from "@modules/home/home.module";
import { LessonsModule } from "@modules/lessons/lessons.module";
import { LessonsService } from "@services/lessons.service";
import { LoadingFactory } from "@factories/loading.factory";
import { LoadingService } from "@services/loading.service";
import { MoviesModule } from "@modules/movies/movies.module";
import { MoviesService } from "@services/movies.service";
import { SharedModule } from "@shared/shared.module";
import { uiImage } from "@directives/ui-image.directive";
import "./styles/main.styles.scss";

angular
  .module("app", [
    uiRouter,
    SharedModule.name,
    GlobalLoadingModule.name,
    CalcModule.name,
    MoviesModule.name,
    LessonsModule.name,
    HomeModule.name,
  ])

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

  .constant("constants", constants)

  .service("loadingFactory", LoadingFactory)

  .service("globalLoadingService", LoadingService)
  .service("calcService", CalcService)
  .service("moviesService", MoviesService)
  .service("lessonsService", LessonsService)

  .directive("uiImage", uiImage)

  .component("app", AppComponent);
