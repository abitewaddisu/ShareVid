import express from "express";
import { addVideo, addView, getByTag, getVideo, random, search, sub, trend } from "../controllers/video.js";
import { verifyToken } from "../utils/verifyToken.js";

const router = express.Router();

//create a video
router.post("/", verifyToken, addVideo)

// edit video
router.put("/:id", verifyToken, addVideo)

//delete video
router.delete("/:id", verifyToken, addVideo)

//get a video
router.get("/find/:id", getVideo)

//add view
router.put("/view/:id", addView)

//get trending videos
router.get("/trend", trend)

//get random videos
router.get("/random", random)

// subcribe a user   
router.get("/sub",verifyToken, sub)

//get videos by tag
router.get("/tags", getByTag)

//search videos
router.get("/search", search)

export default router;
