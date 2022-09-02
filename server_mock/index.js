import * as config from "./config";
import { runServer } from "./src/server";

runServer({ PORT: config.SERVER_PORT });
