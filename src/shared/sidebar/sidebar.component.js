import SidebarTemplate from "./sidebar.template.html";
import { SidebarController } from "./sidebar.controller";
import "./sidebar.styles.scss";

export const SidebarComponent = {
  bindings: {},
  template: SidebarTemplate,
  controller: SidebarController,
  controllerAs: "vm",
  restrict: "E",
};
