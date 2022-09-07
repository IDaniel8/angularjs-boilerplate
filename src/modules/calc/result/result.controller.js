export class ResultController {
  error = "";
  loading = false;

  constructor($rootScope, calcService) {
    "ngInject";

    this.routeState = $rootScope.routeState;
    this.calcService = calcService;

    this.a = $rootScope.routeState.params.a ?? 0;
    this.b = $rootScope.routeState.params.b ?? 0;
  }

  getAddResult() {
    this.loading = true;
    this.calcService
      .$add(this.a, this.b)
      .then((res) => {
        this.result = res.data.result;
      })
      .catch((e) => {
        this.error = "oops an error has ocurred...";
      })
      .finally(() => {
        this.loading = false;
      });
  }

  $onInit() {
    this.getAddResult();
  }
  $doCheck() {}
  $onChanges(onChangesObj) {}
  $onDestroy() {}
}
