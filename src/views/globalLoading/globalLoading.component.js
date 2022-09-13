import GlobalLoadingTemplate from "./globalLoading.template.html";
import { GlobalLoadingController } from "./globalLoading.controller";
import "./globalLoading.styles.scss";

export const GlobalLoadingComponent = {
  bindings: {},
  template: GlobalLoadingTemplate,
  controller: GlobalLoadingController,
  controllerAs: "vm",
  restrict: "E",
};
