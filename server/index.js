const express = require("express");
const path = require("path");
const connectDB = require("./config/db");
const app = express();
const registerRoutes =require('./routers/registerRoutes')
const loginRoutes =require('./routers/loginRoutes')

// const FILES_DIR = "files"

app.use(express.json());
const clients = [];

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/file", function (req, res) {
  clients.push(req.ip);

  const options = {
    root: path.join(__dirname, "files"),
  };

  const fileName = "text.txt";

  res.sendFile(fileName, options, function (err) {
    if (err) {
      console.error("Error sending file:", err);
    } else {
      console.log("Sent:", fileName);
    }
  });
});



app.use('/api/v1/register',registerRoutes)
app.use('/api/v1/login',loginRoutes)




connectDB()
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`Server is running on port ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.error("Failed to connect to MongoDB. Server not started.", err);
  });
