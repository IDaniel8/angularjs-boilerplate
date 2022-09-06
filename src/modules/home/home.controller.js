export class HomeController {
  a = 0;
  b = 0;
  result = 0;

  constructor($stateParams) {
    "ngInject";

    this.a = $stateParams.a ?? 0;
    this.b = $stateParams.b ?? 0;
  }

  $onInit() {
    this.result = Number(this.a) + Number(this.b);
  }
  $doCheck() {}
  $onChanges(onChangesObj) {}
  $onDestroy() {}
}
