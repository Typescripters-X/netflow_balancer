import express from "express";
import { default as simulationRouter } from "./simulation.js";
const app = express();

const port = 3000;

app.use("/simulate", simulationRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
