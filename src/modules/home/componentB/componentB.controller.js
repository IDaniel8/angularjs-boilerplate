export class ComponentBController {
  constructor($rootScope, componentBLoadingService) {
    "ngInject";

    this.routeState = $rootScope.routeState;
    this.componentBLoadingService = componentBLoadingService;
  }

  setLoading(isLoading) {
    this.componentBLoadingService.$setLoadingState(isLoading);
  }

  $onInit() {}
  $doCheck() {}
  $onChanges(onChangesObj) {}
  $onDestroy() {}
}
