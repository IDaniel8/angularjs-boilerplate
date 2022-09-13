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
      filter: paginate?.filter ?? "",
      sortColumn: paginate?.filter ?? "seqNo",
      sortOrder: paginate?.sortOrder ?? "asc",
      pageNumber: Number(paginate?.pageNumber) || 0,
      pageSize: Number(paginate?.pageSize) || 3,
    };
    return this.$http.get(`${this.constants.API_URL}/lessons`, {
      params: paginationConfig,
    });
  }
}
