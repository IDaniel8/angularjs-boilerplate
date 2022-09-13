import { CalcModule } from "./calc/calc.module";
import { GlobalLoadingModule } from "./globalLoading/globalLoading.module";
import { HomeModule } from "./home/home.module";
import { LessonsModule } from "./lessons/lessons.module";
import { MoviesModule } from "./movies/movies.module";

export const ViewsModule = angular.module("app.views", [
  GlobalLoadingModule.name,
  CalcModule.name,
  MoviesModule.name,
  LessonsModule.name,
  HomeModule.name,
]);
