import jsonServer from "json-server";
import { calcCustomRoute } from "./routes-custom/calc";
import { lessonCustomRoute } from "./routes-custom/lessons";
import {
  newEntryServerMiddleware,
  delayReqServerMiddleware,
} from "./middlewares/server";

const server = jsonServer.create();
const router = jsonServer.router("db.json");
const defaultMiddlewares = jsonServer.defaults({ bodyParser: true });

// Set default middlewares (logger, static, cors and no-cache)
server.use(defaultMiddlewares);
server.use(
  jsonServer.rewriter({
    "/api/*": "/$1",
  })
);

server.use(delayReqServerMiddleware(1000));
server.use(newEntryServerMiddleware);
lessonCustomRoute(server, router);
calcCustomRoute(server, router);
server.use(router);

export function runServer({ PORT }) {
  server.listen(PORT, () => {
    console.log(`JSON Server is running: ${PORT}`);
  });
}
