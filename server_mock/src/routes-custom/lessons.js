function sortCalc(valueA, valueB, typeValue) {
  switch (typeValue) {
    case "number": {
      if (valueA > valueB) {
        return 1;
      } else if (valueA < valueB) {
        return -1;
      } else {
        return 0;
      }
    }
    case "string":
      return valueA.localeCompare(valueB);
    default:
      return 0;
  }
}

export function lessonCustomRoute(server, router) {
  const db = router.db;

  server.get("/lessons", (req, res) => {
    const config = {
      filter: req.query["filter"] ?? "",
      filterColumn: req.query["filterColumn"] ?? "",
      sortColumn: req.query["sortColumn"] ?? "",
      sortOrder: req.query["sortOrder"] ?? "asc",
      pageNumber: Number(req.query["pageNumber"] ?? "0"),
      pageSize: Number(req.query["pageSize"] ?? "3"),
      totalItems: db.get("lessons").size().value(),
      payload: db.get("lessons").value(),
    };

    let isSort =
      ["description", "duration", "seqNo"].indexOf(config.sortColumn) !== -1;
    let isFilter =
      ["description", "duration", "seqNo"].indexOf(config.filterColumn) !== -1;

    // Sorting Filter
    if (isSort) {
      config.payload = config.payload.sort((a, b) => {
        if (config.sortOrder === "asc") {
          return sortCalc(
            a[config.sortColumn],
            b[config.sortColumn],
            typeof a[config.sortColumn]
          );
        }

        return sortCalc(
          b[config.sortColumn],
          a[config.sortColumn],
          typeof a[config.sortColumn]
        );
      });
    }

    // Search Filter
    if (config.filter && isFilter) {
      config.payload = config.payload.filter((item) =>
        String(item[config.filterColumn])
          .trim()
          .toLowerCase()
          .includes(config.filter.toLowerCase())
      );
      config.totalItems = config.payload.length;
    }

    // Size Filter
    const start = config.pageNumber * config.pageSize;
    const end = start + config.pageSize;
    config.payload = config.payload.slice(start, end);

    res.status(200).jsonp({
      filter: config.filter,
      filterColumn: config.filterColumn,
      sortColumn: config.sortColumn,
      sortOrder: config.sortOrder,
      pageNumber: String(config.pageNumber + 1),
      pageSize: String(config.pageSize),
      total: String(config.totalItems),
      totalPages: String(
        config.totalPages ?? Math.ceil(config.totalItems / config.pageSize)
      ),
      payload: config.payload,
    });
  });
}
