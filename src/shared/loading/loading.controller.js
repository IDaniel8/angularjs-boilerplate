export class LoadingController {
  constructor($rootScope, loadingService) {
    "ngInject";

    this.rootScope = $rootScope;
    this.loadingService = loadingService;
  }

  $onInit() {}
  $doCheck() {}
  $onChanges(onChangesObj) {}
  $onDestroy() {}
}
