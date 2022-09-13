export class SeriesController {
  constructor($scope, moviesService, globalLoadingService) {
    "ngInject";

    this.series = [];
    this.selectedSerieId = null;

    this.localScope = $scope;
    this.moviesService = moviesService;
    this.globalLoadingService = globalLoadingService;
  }

  onEmitMovieSerieChange(selectedSerie) {
    this.localScope.$emit("movies:serieChange", selectedSerie);
  }

  fetchMovieSeries() {
    this.globalLoadingService.$setLoadingState(true);
    return this.moviesService
      .$getSeries()
      .then((resp) => {
        return resp.data;
      })
      .finally(() => {
        this.globalLoadingService.$setLoadingState(false);
      });
  }

  changeID(selectedSerie) {
    if (selectedSerie.id !== this.selectedSerieId) {
      this.selectedSerieId = selectedSerie.id;
      this.onEmitMovieSerieChange(selectedSerie);
    }
  }

  $onInit() {
    this.fetchMovieSeries().then((series) => {
      this.series = series;
      this.changeID(series[0]);
    });
  }
  $doCheck() {}
  $onChanges(onChangesObj) {}
  $onDestroy() {}
}
