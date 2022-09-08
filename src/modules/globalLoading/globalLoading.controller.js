export class GlobalLoadingController {
  constructor($rootScope) {
    "ngInject";

    this.routeState = $rootScope.routeState;
  }

  $onInit() {}
  $doCheck() {}
  $onChanges(onChangesObj) {}
  $onDestroy() {}
}
