import { exhaustMap } from "@utils/exhaustMap";

export class LessonsController {
  pageConfig = null;
  gridOptions = {
    data: [],
    columnDefs: [
      { name: "seqNo", enableSorting: false, enableHiding: false },
      { name: "description", enableSorting: false, enableHiding: false },
      { name: "duration", enableSorting: false, enableHiding: false },
    ],
  };

  constructor($scope, lessonsService) {
    "ngInject";

    this.localScope = $scope;
    this.lessonsService = lessonsService;
  }

  fetchPaginatedLessons(paginate = {}) {
    return this.lessonsService.$getLessonsPaginate(paginate).then((resp) => {
      console.log(resp.data);
      return resp.data;
    });
  }

  loadMore() {
    const currentPageIdx = Number(this.pageConfig.page) - 1;
    const maxPageIdx = Number(this.pageConfig.totalPages) - 1;

    if (currentPageIdx < maxPageIdx) {
      exhaustMap(this.fetchPaginatedLessons.bind(this), {
        pageNumber: currentPageIdx + 1,
      }).subscribe(({ payload, ...restData }) => {
        this.pageConfig = restData;
        this.gridOptions.data = this.gridOptions.data.concat(payload);
      });
    }
  }

  $onInit() {
    this.fetchPaginatedLessons().then(({ payload, ...restData }) => {
      this.pageConfig = restData;
      this.gridOptions.data = payload;
    });
  }
  $doCheck() {}
  $onChanges(onChangesObj) {}
  $onDestroy() {}
}
