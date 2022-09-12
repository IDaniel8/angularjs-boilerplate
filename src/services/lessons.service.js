export class LessonsService {
  $http = null;
  constants = null;

  constructor($http, constants) {
    "ngInject";

    this.$http = $http;
    this.constants = constants;
  }

  $getLessonsPaginate() {
    return this.$http.get(`${this.constants.API_URL}/lessons`);
  }
}
