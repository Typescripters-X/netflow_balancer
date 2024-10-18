const express = require("express");
const simulationRouter = require("./routers/simulationRouter.js");
const connectDB = require("./config/db.js");
const registerRoutes = require("./routers/registerRoutes");
const loginRoutes = require("./routers/loginRoutes");

const app = express();
const auth = require("./middlewares/authMiddleware");

app.use(express.json());

app.use("/simulate", simulationRouter);
app.use("/api/v1/register", registerRoutes);
app.use("/api/v1/login", loginRoutes);

connectDB()
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`Server is running on port ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.error("Failed to connect to MongoDB. Server not started.", err);
  });
