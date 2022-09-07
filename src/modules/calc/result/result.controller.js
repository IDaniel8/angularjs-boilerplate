export class ResultController {
  error = "";

  constructor($rootScope, calcService, loadingService) {
    "ngInject";

    this.routeState = $rootScope.routeState;
    this.calcService = calcService;
    this.loadingService = loadingService;

    this.a = $rootScope.routeState.params.a ?? 0;
    this.b = $rootScope.routeState.params.b ?? 0;
  }

  getAddResult() {
    this.loadingService.$setLoadingState(true);
    this.calcService
      .$add(this.a, this.b)
      .then((res) => {
        this.result = res.data.result;
      })
      .catch((e) => {
        this.error = "oops an error has ocurred...";
      })
      .finally(() => {
        this.loadingService.$setLoadingState(false);
      });
  }

  $onInit() {
    this.getAddResult();
  }
  $doCheck() {}
  $onChanges(onChangesObj) {}
  $onDestroy() {}
}
