import {
  createmover,
  updatemover,
  getAllMoverDone,
} from "../controllers/mover.Controller";
import { done } from "../controllers/mover_item.Controller";
import { addBody } from "../middlewares/dynamicMiddleware";
import { Router } from "express";
const router = Router();
router.route("/").post(createmover);
router.route("/done").get(getAllMoverDone);
router
  .route("/:id/resting")
  .patch(addBody({ quest_state: "resting" }), updatemover);
router
  .route("/:id/loading")
  .patch(addBody({ quest_state: "loading" }), updatemover);
router
  .route("/:id/on_mission")
  .patch(addBody({ quest_state: "on a mission" }), updatemover);
router
  .route("/:id/done")
  .patch(done, addBody({ quest_state: "done" }), updatemover);
export default router;
