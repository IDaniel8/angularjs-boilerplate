export class LoadingService {
  loading = false;

  constructor() {}

  $setLoadingState(isLoading) {
    this.loading = isLoading;
  }

  $getLoadingState() {
    return this.loading;
  }
}
