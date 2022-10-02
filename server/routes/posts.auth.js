import express from "express";
import {getPosts,createPost,updatePost,deletePost,likePost} from "../controllers/posts.controll.js";
//!GET
const router = express.Router();
router.get("/", getPosts);
//!CREATE
router.post("/",createPost);
//!UPDATE
router.patch("/:id",updatePost);
//!DELETE
router.delete("/:id",deletePost);
//!LIKE
router.patch("/:id/likePost",likePost);
export default router;
