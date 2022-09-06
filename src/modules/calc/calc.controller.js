export class CalcController {
  constructor($rootScope) {
    "ngInject";

    this.routeState = $rootScope.routeState;
  }

  doAdd() {
    this.routeState.go("home", {
      a: this.a,
      b: this.b,
    });
  }

  $onInit() {}
  $doCheck() {}
  $onChanges(onChangesObj) {}
  $onDestroy() {}
}
