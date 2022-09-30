import express from "express";
import {getPosts,createPost,updatePost} from "../controllers/posts.controll.js";
//!GET
const router = express.Router();
router.get("/", getPosts);
//!CREATE
router.post("/",createPost);
//!UPDATE
router.patch("/:id",updatePost);
export default router;

