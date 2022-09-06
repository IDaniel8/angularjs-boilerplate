export class CalcController {
  routeState = null;
  a = null;
  b = null;

  constructor($state) {
    "ngInject";

    this.routeState = $state;
  }

  doAdd() {
    console.log(this.a, this.b);
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
