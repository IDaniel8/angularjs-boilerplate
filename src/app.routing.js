const states = [
  {
    name: "home",
    url: "/",
    template: "<app.home></app.home>",
  },
  {
    name: "calc",
    url: "/calc",
    template: "<app.calc></app.calc>",
  },
  {
    name: "globalLoading",
    url: "/global-loading",
    template: "<app.global.loading></app.global.loading>",
  },
  {
    name: "movies",
    url: "/movies",
    template: "<app.movies></app.movies>",
  },
  {
    name: "lessons",
    url: "/lessons",
    template: "<app.lessons></app.lessons>",
  },
  {
    name: "otherwise",
    url: "*path",
    template: "<strong>no route available</strong>",
  },
];

export function appRouting($stateProvider, remainStates = null) {
  const restStates = remainStates ?? states;

  if (restStates[0]) {
    $stateProvider.state(restStates[0].name, {
      url: restStates[0].url,
      template: restStates[0].template,
    });

    appRouting($stateProvider, restStates.slice(1));
  }
}
