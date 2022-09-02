import "./sidebar.styles.scss";

import { SidebarController } from "./sidebar.controller";
import SidebarTemplate from "./sidebar.template.html";

export const SidebarComponent = {
  bindings: {},
  template: SidebarTemplate,
  controller: SidebarController,
  controllerAs: "vm",
  restrict: "E",
};
