const express = require("express");
const simulationRouter = require("./routers/simulationRouter.js");
const connectDB = require("./config/db.js");
const registerRoutes = require("./routers/registerRoutes");
const loginRoutes = require("./routers/loginRoutes");
const clientsRoutes = require("./routers/clientsRoutes");
const historyRoutes = require("./routers/historyRoutes");

const app = express();
const cors = require("cors");

const corsOptions = {
  origin: ['http://localhost:5173'], 
  methods: ['GET', 'POST', 'PUT', 'PATCH'], 
};

app.use(cors());

app.use(express.json());



app.get("/test", (req, res) => {
  res.json({ message: "hello world" });
});



app.use("/api/v1/simulate", simulationRouter);
app.use("/api/v1/register", registerRoutes);
app.use("/api/v1/login", loginRoutes);
app.use("/api/v1/clients", clientsRoutes);
app.use("/api/v1/history", historyRoutes);

connectDB()
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`Server is running on port ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.error("Failed to connect to MongoDB. Server not started.", err);
  });
