import express from "express";
import { createCurrentUser } from "../controllers/userController";

const router = express.Router();

router.post("/", createCurrentUser);

export default router;
