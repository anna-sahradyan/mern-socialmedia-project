import express from "express";
import {signIn, signUp} from "../controllers/user.controll.js";
const router = express.Router();

router.post("/signIn", signIn);
router.post("/signUp", signUp);
export default router;