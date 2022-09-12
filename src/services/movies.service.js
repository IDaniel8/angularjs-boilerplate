export class MoviesService {
  $http = null;
  constants = null;

  constructor($http, constants) {
    "ngInject";

    this.$http = $http;
    this.constants = constants;
  }

  $getEpisodes() {
    return this.$http.get(`${this.constants.API_URL}/episodes`);
  }

  $getEpisodesFromSerieId(serieId) {
    return this.$getEpisodes().then((resp) => {
      return {
        ...resp,
        data: resp.data.filter((episode) => episode.refId === serieId),
      };
    });
  }

  $getSeries() {
    return this.$http.get(`${this.constants.API_URL}/series`);
  }
}
