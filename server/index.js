const express = require("express");
const simulationRouter = require("./routers/simulationRouter.js");
const connectDB = require("./config/db.js");
const registerRoutes = require("./routers/registerRoutes");
const loginRoutes = require("./routers/loginRoutes");
const clientsRoutes = require("./routers/clientsRoutes");


const app = express();
const auth = require("./middlewares/authMiddleware");
const isAdmin = require("./middlewares/isAdminMiddleware");

app.use(express.json());



app.get("/test",isAdmin, (req, res) => {
  res.json({ message: "You are an admin" });
});

app.use("/simulate", simulationRouter);
app.use("/api/v1/register", registerRoutes);
app.use("/api/v1/login", loginRoutes);
app.use("/api/v1/clients", clientsRoutes);

connectDB()
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`Server is running on port ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.error("Failed to connect to MongoDB. Server not started.", err);
  });
