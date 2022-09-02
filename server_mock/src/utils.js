import { v4 as uuidv4 } from "uuid";

export function generateNewEntryId() {
  return { id: uuidv4(), createdAt: Date.now() };
}
