import Item from "../models/itemModel";
import { createOne } from "../utils/handlerFactory";
export const createItem = createOne(Item);
