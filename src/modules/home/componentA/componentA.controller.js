export class ComponentAController {
  constructor($rootScope, componentALoadingService) {
    "ngInject";

    this.routeState = $rootScope.routeState;
    this.componentALoadingService = componentALoadingService;
  }

  setLoading(isLoading) {
    this.componentALoadingService.$setLoadingState(isLoading);
  }

  $onInit() {}
  $doCheck() {}
  $onChanges(onChangesObj) {}
  $onDestroy() {}
}
