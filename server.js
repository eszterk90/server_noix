const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");
const PORT = process.env.PORT;
const mongoose = require("mongoose");
const userRouter = require("./routes/userRouter");
const musicRouter = require("./routes/musicRouter");
const chatRouter = require("./routes/chatRouter");
require("./connections/userDB");
const session = require("express-session");

<<<<<<< HEAD
// express-ip
// const expressIP = require('express-ip')
=======
// audio storage

// const storage = new GridFsStorage({
//     url: process.env.DB_LINK_MUSIC,
//     file: (req, res) => {
//         return new Promise((resolve, reject) => {
//         crypto.randomBytes(16, (err, buf) => {
//             if (err) {
//               return reject(err);
//             }
//             const filename = buf.toString('hex') + path.extname(file.originalname);
//             const fileInfo = {
//               filename: filename,
//               bucketName: 'uploads'
//             };
//             resolve(fileInfo);
//           });
//         });
//     }})


// const upload = multer({storage})


>>>>>>> 8d0bdc07c40e011a763e8d30d770773b9e86a1db

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cors());

// session configuration

app.use(
  session({
    secret: process.env.SESSIONKEY,
    resave: true,
    saveUninitialized: true,
    cookie: {
      maxAge: 1000 * 60 * 60 * 12,
    },
  })
);

//routes

// app.use(expressIP().getIpInfoMiddleware);

app.get("/", (req, res) => {
  res.json({
    page: "main page",
    notification: { title: "Welcome to this amazing app", type: "success" },
  });
});
app.use("/user", userRouter);
app.use("/music", musicRouter);
app.use("/chat", chatRouter);

// server listen

app.listen(PORT, () => {
  console.log("listening on port " + PORT);
});

// audio storage

// const storage = new GridFsStorage({
//     url: process.env.DB_LINK_MUSIC,
//     file: (req, res) => {
//         return new Promise((resolve, reject) => {
//         crypto.randomBytes(16, (err, buf) => {
//             if (err) {
//               return reject(err);
//             }
//             const filename = buf.toString('hex') + path.extname(file.originalname);
//             const fileInfo = {
//               filename: filename,
//               bucketName: 'uploads'
//             };
//             resolve(fileInfo);
//           });
//         });
//     }})

// const upload = multer({storage})
