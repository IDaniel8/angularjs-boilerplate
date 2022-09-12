export class LessonsController {
  constructor($rootScope, lessonsService) {
    "ngInject";

    this.lessonsService = lessonsService;
  }

  $onInit() {
    this.lessonsService.$getLessonsPaginate().then((resp) => {
      console.log(resp.data);
    });
  }
  $doCheck() {}
  $onChanges(onChangesObj) {}
  $onDestroy() {}
}
