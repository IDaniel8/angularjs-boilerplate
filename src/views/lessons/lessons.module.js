import angular from "angular";
import { LessonsComponent } from "./lessons.component";

// prettier-ignore
export const LessonsModule = angular
  .module("app.lessons", [])
  .component("app.lessons", LessonsComponent);
