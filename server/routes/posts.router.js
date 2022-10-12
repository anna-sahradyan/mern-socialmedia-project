import express from "express";
import {getPostsBySearch,getPosts,createPost,updatePost,deletePost,likePost} from "../controllers/posts.controll.js";
import auth from "../middleware/auth.midlleware.js";
//!GET
const router = express.Router();
router.get("/", getPosts);
//!CREATE
router.post("/", auth ,createPost);
//!UPDATE
router.patch("/:id", auth ,updatePost);
//!DELETE
router.delete("/:id", auth ,deletePost);
//!LIKE auth
router.patch("/:id/likePost", auth ,likePost);
//!SEARCH
router.get("/search", getPostsBySearch);
export default router;
