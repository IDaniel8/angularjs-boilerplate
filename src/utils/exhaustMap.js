let isFetching = false;

export function exhaustMap($promise, ...args) {
  return {
    subscribe: function (callback) {
      if (isFetching) {
        return;
      }

      isFetching = true;
      return $promise(...args)
        .then((resp) => {
          return callback(resp);
        })
        .finally(() => {
          isFetching = false;
        });
    },
  };
}
