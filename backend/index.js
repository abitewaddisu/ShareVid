import express from "express";
import connectDB from "./config/db.js";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
dotenv.config();
import authRouter from "./routes/auth.js";
import commentRouter from "./routes/comments.js";
import videoRouter from "./routes/videos.js";
import userRouter from "./routes/users.js";

const app = express();

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser())

app.get("/", (req, res) => {
  res.send("Hello World!");
});

//routes
app.use("/api/auth", authRouter);
app.use("/api/comments", commentRouter);
app.use("/api/videos", videoRouter);
app.use("/api/users", userRouter);

app.listen(5000, () => {
  connectDB();
  console.log("Server is running on http://localhost:5000");
});