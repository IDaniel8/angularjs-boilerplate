import LoadingTemplate from "./loading.template.html";
import { LoadingController } from "./loading.controller";
import "./loading.styles.scss";

export const LoadingComponent = {
  transclude: true,
  bindings: {},
  template: LoadingTemplate,
  controller: LoadingController,
  controllerAs: "vm",
  restrict: "E",
};
