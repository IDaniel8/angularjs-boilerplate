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
    const filter = req.query["filter"] ?? "";
    const sortColumn = req.query["sortColumn"] ?? "seqNo";
    const sortOrder = req.query["sortOrder"] ?? "asc";
    const pageNumber = Number(req.query["pageNumber"] ?? "0");
    const pageSize = Number(req.query["pageSize"] ?? "3");

    const totalItems = db.get("lessons").size().value();
    const totalPages = Math.ceil(totalItems / pageSize);

    let payload = db.get("lessons").value();

    if (["description", "duration", "seqNo"].indexOf(sortColumn) === -1) {
      res.status(400).jsonp({ message: "bad request" });
    }

    // Sorting
    payload = payload.sort((a, b) => {
      if (sortOrder === "asc") {
        return sortCalc(a[sortColumn], b[sortColumn], typeof a[sortColumn]);
      }

      return sortCalc(b[sortColumn], a[sortColumn], typeof a[sortColumn]);
    });

    // Limit by page
    const start = pageNumber * pageSize;
    const end = start + pageSize;
    payload = payload.slice(start, end);

    if (filter) {
      payload = payload.filter((item) =>
        item.description.trim().toLowerCase().includes(filter.toLowerCase())
      );
    }

    res.status(200).jsonp({
      page: String(pageNumber + 1),
      pageSize: String(pageSize),
      total: String(totalItems),
      totalPages: String(totalPages),
      payload: payload,
    });
  });
}
