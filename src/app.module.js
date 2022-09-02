import "./styles/main.styles.scss";

import { AppComponent } from "./app.component";
import { SharedModule } from "./shared/shared.module";
import angular from "angular";
import { uiImage } from "./directives/ui-image.directive";
import uiRouter from "angular-ui-router";

// prettier-ignore
angular
  .module("app", [uiRouter, SharedModule.name])
  // .config()
  .run(($rootScope) => {
    'ngInject';

    $rootScope.message = "Hello world from rootScope"
  })
  .directive("uiImage", uiImage)
  .component("app", AppComponent);
