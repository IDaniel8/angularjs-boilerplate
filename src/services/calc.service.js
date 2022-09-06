export class CalcService {
  $http = null;
  constants = null;

  constructor($http, constants) {
    "ngInject";

    this.$http = $http;
    this.constants = constants;
  }

  $add(a, b) {
    return this.$http.get(`${this.constants.API_URL}/calc/add/${a}/${b}`);
  }

  $multiply(a, b) {
    return this.$http.get(`${this.constants.API_URL}/calc/multiply/${a}/${b}`);
  }
}
