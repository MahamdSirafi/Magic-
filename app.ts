//1)
import express, {
  NextFunction,
  Request,
  Response,
  json,
  urlencoded,
} from "express";
import { settings } from "./config/settings";
import connDB from "./config/database";
const port = settings.PORT;
import http from "http";
import { globalErrorHandler, notFound } from "./controllers/error.Controller";
const app = express();
//2)
import itemRouter from "./routes/item.routes";
import moverRouter from "./routes/mover.routes";
import mover_item from "./routes/mover_item.routes ";

//3)
app.use(express.json());

app.use("/api/v1.0.0/items", itemRouter);
app.use("/api/v1.0.0/mover_item", mover_item);
app.use("/api/v1.0.0/movers", moverRouter);
//for other routes
app.all("*", notFound);
//errors handler
app.use(globalErrorHandler);
//4)
const server: http.Server = app.listen(port, async () => {
  await connDB();
  console.log(`Example app listening on ${port}!`);
});
