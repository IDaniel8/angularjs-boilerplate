export class ComponentBController {
  constructor(globalLoadingService, loadingFactory) {
    "ngInject";

    this.globalLoadingService = globalLoadingService;
    this.localLoadingService = loadingFactory.getInstance();
  }

  setGlobalLoading(isLoading) {
    this.globalLoadingService.$setLoadingState(isLoading);
  }

  setLocalLoading(isLoading) {
    this.localLoadingService.$setLoadingState(isLoading);
  }

  $onInit() {}
  $doCheck() {}
  $onChanges(onChangesObj) {}
  $onDestroy() {}
}
