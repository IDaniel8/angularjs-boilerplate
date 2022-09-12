export class EpisodesController {
  constructor($scope, moviesService, globalLoadingService) {
    "ngInject";

    this.episodes = [];

    this.localScope = $scope;
    this.moviesService = moviesService;
    this.globalLoadingService = globalLoadingService;
  }

  fetchMovieEpisodesFromSerieId(serieId) {
    this.globalLoadingService.$setLoadingState(true);
    return this.moviesService
      .$getEpisodesFromSerieId(serieId)
      .then((resp) => {
        return resp.data;
      })
      .finally(() => {
        this.globalLoadingService.$setLoadingState(false);
      });
  }

  $onInit() {
    this.localScope.$on("movies:serieUpdate", (_, data) => {
      this.fetchMovieEpisodesFromSerieId(data.serieId).then((episodes) => {
        this.episodes = episodes;
      });
    });
  }
  $doCheck() {}
  $onChanges(onChangesObj) {}
  $onDestroy() {}
}
