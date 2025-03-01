const express = require("express");
const productRouter = require("./routes/product");
const registerRouter = require("./routes/auth");
const connectDB = require("./config/db");
const path = require('path')

const morgan = require("morgan");
const cors = require("cors");
const bodyParse = require("body-parser");

const app = express();
const PORT = process.env.PORT

connectDB();

app.use(morgan("dev"));
app.use(cors());
app.use(bodyParse.json({ limit: "10mb" }));

app.use(express.urlencoded({ extended: true }));
const multer = require('multer');
const upload = multer();
app.use(upload.none());
app.use('/api/uploads', express.static(path.join(__dirname, 'uploads')));


app.use("/api", productRouter);
app.use("/api", registerRouter);

app.listen(PORT, () => console.log("server is running"));
