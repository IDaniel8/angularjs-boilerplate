import { AppComponent } from "./app.component";
import angular from "angular";

// prettier-ignore
angular
  .module("app", [])
  // .config()
  // .run()
  .component("app", AppComponent);
