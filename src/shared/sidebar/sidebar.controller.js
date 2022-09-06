export class SidebarController {
  active = null;
  rootScope = null;

  constructor($rootScope) {
    "ngInject";

    this.rootScope = $rootScope;
  }

  $onInit() {
    this.rootScope.$on("$stateChangeSuccess", (event, toState) => {
      this.active = toState.name;
    });
  }
  $doCheck() {}
  $onChanges(onChangesObj) {}
  $onDestroy() {}
}
