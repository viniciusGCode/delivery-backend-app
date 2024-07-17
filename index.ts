import express from "express";
import { AdminRoute, VandorRoute } from "./routes";
import mongoose from "mongoose";
import { MONGO_URI } from "./config";

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/admin", AdminRoute);
app.use("/vandor", VandorRoute);

mongoose
  .connect(MONGO_URI)
  .then((result) => {
    console.log("connected to database");
  })
  .catch((error) => {
    console.error(error);
  });

app.listen(1337, () => {
  console.clear();
  console.log("application running");
});
