import { LoadingService } from "@services/loading.service";

export class LoadingFactory {
  constructor() {
    "ngInject";
  }

  getInstance(serviceName) {
    return new LoadingService();
  }
}
