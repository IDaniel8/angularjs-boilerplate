export class LessonsController {
  myData = [
    {
      firstName: "Cox",
      lastName: "Carney",
      company: "Enormo",
      employed: true,
    },
    {
      firstName: "Lorraine",
      lastName: "Wise",
      company: "Comveyer",
      employed: false,
    },
    {
      firstName: "Nancy",
      lastName: "Waters",
      company: "Fuelton",
      employed: false,
    },
  ];

  constructor($rootScope, lessonsService) {
    "ngInject";

    this.lessonsService = lessonsService;
  }

  $onInit() {
    // this.lessonsService.$getLessonsPaginate().then((resp) => {
    //   console.log(resp.data);
    // });
  }
  $doCheck() {}
  $onChanges(onChangesObj) {}
  $onDestroy() {}
}
