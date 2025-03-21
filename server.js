const express = require("express");
const productRouter = require("./routes/product");
const registerRouter = require("./routes/auth");
const connectDB = require("./config/db");
const path = require("path");
const borrowRouter = require("./routes/borrow");

const morgan = require("morgan");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT;

connectDB();

app.use(morgan("dev"));
app.use(
  cors({
    origin: "*",
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.use('/api/uploads', express.static(path.join(__dirname, 'uploads')));

app.use("/api", productRouter);
app.use("/api", registerRouter);
app.use("/api", borrowRouter);

app.listen(PORT, () => console.log("server is running"));
