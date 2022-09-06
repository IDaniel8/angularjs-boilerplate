export function calcCustomRoute(server, router) {
  const db = router.db;

  server.get("/calc/add/:a/:b", (req, res) => {
    const a = Number(req.params["a"] ?? null);
    const b = Number(req.params["b"] ?? null);

    res.status(200).jsonp({
      result: a + b,
    });
  });

  server.get("/calc/multiply/:a/:b", (req, res) => {
    const a = Number(req.params["a"] ?? null);
    const b = Number(req.params["b"] ?? null);

    res.status(200).jsonp({
      result: a * b,
    });
  });
}
