export class ResultController {
  error = "";

  constructor($rootScope, resultCalcService, resultLoadingService) {
    "ngInject";

    this.routeState = $rootScope.routeState;
    this.resultCalcService = resultCalcService;
    this.resultLoadingService = resultLoadingService;

    this.a = $rootScope.routeState.params.a ?? 0;
    this.b = $rootScope.routeState.params.b ?? 0;
  }

  getAddResult() {
    this.resultLoadingService.$setLoadingState(true);
    this.resultCalcService
      .$add(this.a, this.b)
      .then((res) => {
        this.result = res.data.result;
      })
      .catch((e) => {
        this.error = "oops an error has ocurred...";
      })
      .finally(() => {
        this.resultLoadingService.$setLoadingState(false);
      });
  }

  $onInit() {
    this.getAddResult();
  }
  $doCheck() {}
  $onChanges(onChangesObj) {}
  $onDestroy() {}
}
