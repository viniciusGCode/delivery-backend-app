import express from "express";
import bodyParser from "body-parser";

import { AdminRoute, VandorRoute } from "./routes";

const app = express();

app.use(bodyParser)
app.use(bodyParser.urlencoded({extended: true}))

app.use("/admin", AdminRoute);
app.use("/vandor", VandorRoute);

app.listen(1337, () => {
  console.clear()
  console.log("application running");
});
