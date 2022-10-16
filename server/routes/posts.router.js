import express from "express";
import {
    getPostsBySearch,
    getPosts,
    createPost,
    updatePost,
    deletePost,
    likePost,
    getPost,
    commentPost
} from "../controllers/posts.controll.js";
import auth from "../middleware/auth.midlleware.js";

const router = express.Router();
//!SEARCH
router.get("/search", getPostsBySearch);
//!GET POSTS
router.get("/", getPosts);
//!GET POST
router.get("/:id", getPost);
//!CREATE
router.post("/", auth, createPost);
//!UPDATE
router.patch("/:id", auth, updatePost);
//!DELETE
router.delete("/:id", auth, deletePost);
//!LIKE auth
router.patch("/:id/likePost", auth, likePost);
//!COMMENT POST
router.post("/:id/commentPost", auth, commentPost);

export default router;
