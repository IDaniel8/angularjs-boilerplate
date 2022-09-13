import { debounce } from "lodash";
import { exhaustMap } from "@utils/exhaustMap";

export class LessonsController {
  constructor($scope, lessonsService) {
    "ngInject";

    this.localScope = $scope;
    this.lessonsService = lessonsService;

    this.debouncedSearchFilter = debounce(this.searchFilter.bind(this), 800);
  }

  pageConfig = {};
  gridOptions = {
    enableFiltering: true,
    useExternalFiltering: true,
    data: [],
    columnDefs: [
      {
        name: "seqNo",
        enableSorting: false,
        enableFiltering: false,
        enableHiding: false,
      },
      {
        name: "description",
        enableSorting: false,
        enableFiltering: true,
        enableHiding: false,
      },
      {
        name: "duration",
        enableSorting: false,
        enableFiltering: false,
        enableHiding: false,
      },
    ],
    onRegisterApi: (gridApi) => {
      this.gridApi = gridApi;
      this.gridApi.core.on.filterChanged(this.localScope, () => {
        const gridConfig = this.gridApi.grid;
        const descriptionSearch = gridConfig.columns[1].filters[0].term;

        if (descriptionSearch) {
          this.debouncedSearchFilter(descriptionSearch, "description");
        } else {
          this.initialLoad();
        }
      });
    },
  };

  fetchPaginatedLessons(paginate = {}) {
    return this.lessonsService.$getLessonsPaginate(paginate).then((resp) => {
      return resp.data;
    });
  }

  searchFilter(searchTerm, field) {
    this.fetchPaginatedLessons({
      filter: searchTerm,
      filterColumn: field,
      pageSize: "100",
    }).then(({ payload, ...restData }) => {
      this.pageConfig = restData;
      this.gridOptions.data = payload;
    });
  }

  loadMore() {
    const currentPageIdx = Number(this.pageConfig?.pageNumber ?? null) - 1;
    const maxPageIdx = Number(this.pageConfig?.totalPages ?? null) - 1;

    if (currentPageIdx < maxPageIdx) {
      exhaustMap(this.fetchPaginatedLessons.bind(this), {
        ...this.pageConfig,
        pageNumber: currentPageIdx + 1,
      }).subscribe(({ payload, ...restData }) => {
        this.pageConfig = restData;
        this.gridOptions.data = this.gridOptions.data.concat(payload);
      });
    }
  }

  initialLoad() {
    this.fetchPaginatedLessons().then(({ payload, ...restData }) => {
      this.pageConfig = restData;
      this.gridOptions.data = payload;
    });
  }

  $onInit() {
    this.initialLoad();
  }
  $doCheck() {}
  $onChanges(onChangesObj) {}
  $onDestroy() {}
}
