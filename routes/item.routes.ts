import { createItem } from "../controllers/item.Controller";
import { Router } from "express";
const router = Router();
router.route("/").post(createItem);
export default router;
