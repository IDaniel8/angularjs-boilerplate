export class LessonsService {
  $http = null;
  constants = null;

  constructor($http, constants) {
    "ngInject";

    this.$http = $http;
    this.constants = constants;
  }

  $getLessonsPaginate(paginate) {
    const paginationConfig = {
      filter: paginate?.filter,
      filterColumn: paginate?.filterColumn,
      sortColumn: paginate?.sortColumn,
      sortOrder: paginate?.sortOrder,
      pageNumber: paginate?.pageNumber,
      pageSize: paginate?.pageSize,
    };
    return this.$http.get(`${this.constants.API_URL}/lessons`, {
      params: paginationConfig,
    });
  }
}
