const express = require("express");
const connectDB = require("./db/mongoose");

const app = express();

// Connect to database
connectDB();

app.get("/", (req, res) => {
  res.send({ msg: "Api Running" });
});

// middleware
app.use(express.json({ extended: false }));
app.use(express.urlencoded({ extended: false }));

// Define routes
app.use("/api", require("./routers/userRouter"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("Server started on port", PORT);
});
