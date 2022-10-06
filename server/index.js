import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import postRoutes from "./routes/posts.router.js";
import userRoutes from "./routes/users.router.js";

dotenv.config();
const PORT = process.env.PORT || 3002
const app = express();
app.use(cors());
app.use(bodyParser.json({limit: "30mb", extended: true}))
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}))
app.use("/posts", postRoutes);
app.use("/user", userRoutes);
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => app.listen(PORT, () => console.log(`Server is running at http://localhost:${PORT} `))).catch((err) => console.log(err.message));






