import "./app.styles.scss";

import { AppController } from "./app.controller";
import AppTemplate from "./app.template.html";

export const AppComponent = {
  template: AppTemplate,
  controller: AppController,
  controllerAs: "vm",
  restrict: "E",
};
