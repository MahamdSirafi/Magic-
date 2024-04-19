import { ItemModel } from "../models/itemModel";
import { createOne } from "../utils/handlerFactory";
export const createItem = createOne(ItemModel);
