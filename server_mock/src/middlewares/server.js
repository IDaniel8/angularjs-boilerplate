import { generateNewEntryId } from "../utils";

// Delays the server
export const delayReqServerMiddleware = (time) => (req, res, next) => {
  setTimeout(() => {
    next();
  }, time);
};

// Set the unique id and timestamp for every new entry
export const newEntryServerMiddleware = (req, res, next) => {
  if (req.method !== "POST") {
    next();
  } else if (req.method === "POST" && Object.keys(req.body).length > 0) {
    const { id, createdAt } = generateNewEntryId();
    req.body.id = id;
    req.body.createdAt = createdAt;
    next();
  } else {
    res.sendStatus(500);
  }
};
