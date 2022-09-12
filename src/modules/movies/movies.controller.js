export class MoviesController {
  constructor($scope, globalLoadingService) {
    "ngInject";

    this.appName = "View Series Parts";
    this.seriesName = "";
    this.movieID = 1;

    this.localScope = $scope;
    this.globalLoadingService = globalLoadingService;
  }

  onBroadcastMovieSerieUpdate(serieId) {
    this.localScope.$broadcast("movies:serieUpdate", { serieId });
  }

  $onInit() {
    this.localScope.$on("movies:serieChange", (_, data) => {
      this.seriesName = data.name;
      this.movieID = data.id;
      this.onBroadcastMovieSerieUpdate(data.id);
    });
  }
  $doCheck() {}
  $onChanges(onChangesObj) {}
  $onDestroy() {}
}
