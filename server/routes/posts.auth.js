import express from "express";
import {getPosts,createPost} from "../controllers/posts.controll.js";
//!GET
const router = express.Router();
router.get("/", getPosts);
//!CREATE
router.post("/",createPost);
export default router;