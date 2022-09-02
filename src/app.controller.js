// import { IController } from "angular";
import image from "@images/angular-logo.png";

export class AppController {
  title = "Welcome to angular APP";

  constructor($rootScope) {
    "ngInject";

    this.title = $rootScope.message;
  }

  $onInit() {}
  $doCheck() {}
  $onChanges(onChangesObj) {}
  $onDestroy() {}
}
