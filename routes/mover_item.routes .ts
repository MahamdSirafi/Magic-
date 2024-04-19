import { createItem } from "../controllers/mover_item.Controller";
import { Router } from "express";
const router = Router();
router.route("/").post(createItem);
export default router;
