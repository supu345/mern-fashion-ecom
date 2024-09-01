const express = require("express");
const router = require("./src/routes/api.js");
const multer = require("multer");
const rateLimit = require("express-rate-limit");
const helmet = require("helmet");
const mongoSanitize = require("express-mongo-sanitize");
const xss = require("xss-clean");
const hpp = require("hpp");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
const path = require("path");

const app = express();
// const PORT = process.env.PORT || 5000;
const URL =
  "mongodb+srv://<username>:<password>@cluster0.fcgjuvw.mongodb.net/fashion-ecom";
const option = { user: "supu345", pass: "user123", autoIndex: true };

mongoose
  .connect(URL, option)
  .then(() => console.log("Database Connected"))
  .catch((err) => console.log("Database Connection Error:", err));

app.use(
  cors({
    origin: "http://localhost:5173", // Match this to your front-end URL
    methods: "GET, POST, PUT, DELETE",
    allowedHeaders: "Content-Type, Authorization",
    credentials: true, // Allow cookies to be sent
  })
);

// Handle preflight requests
app.options("*", cors());

app.use((req, res, next) => {
  res.setHeader("Cross-Origin-Resource-Policy", "cross-origin");
  next();
});

app.use(cookieParser());
app.use(helmet());
app.use(mongoSanitize());
app.use(xss());
app.use(hpp());

const storage = multer.diskStorage({
  destination: "./upload/images",
  filename: (req, file, cb) => {
    cb(
      null,
      `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`
    );
  },
});

const upload = multer({ storage: storage });

app.get("/images/*", (req, res, next) => {
  res.setHeader("Cross-Origin-Resource-Policy", "cross-origin");
  next();
});

app.use("/images", express.static("upload/images"));

app.post("/api/v1/upload", upload.single("product"), (req, res) => {
  req.body.image = req.file.path;
  console.log("File Upload Request:", req.file);
  if (!req.file) return res.status(400).json({ error: "No file uploaded" });
  res.json({
    success: 1,
    image_url: `http://localhost:5000 /images/${req.file.filename}`, // Ensure PORT is correct
  });
});

app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));

const limiter = rateLimit({ windowMs: 15 * 60 * 1000, max: 3000 });
app.use(limiter);

app.set("etag", false);
app.use("/api/v1", router);

app.use((req, res, next) => {
  console.log("Received request:", req.method, req.url);
  next();
});
app.post("/api/v1/CreateProduct", (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:5000");
  res.setHeader("Access-Control-Allow-Methods", "POST");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  res.setHeader("Access-Control-Allow-Credentials", "true");

  // Your product creation logic here

  res.json({ success: true });
});

app.get("/api/v1/test", (req, res) => {
  res.json({ message: "Server is working" });
});

app.use(express.static("client/dist"));
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "client", "dist", "index.html"));
});

// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });

module.exports = app;
