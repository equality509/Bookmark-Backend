// Import express and bookmark model
import express from "express";
import Bookmark from "../models/bookmark.js";

// Express router
const router = express.Router();

// Error handler
const catcher = (res) => (error) => res.status(400).json({error})

// "/cheese" - index route
router.get("/", async (req, res) => {
    const bookmarks = await Bookmark.find({}).catch(catcher(res))
    res.json(bookmarks)
})

// "/cheese" - create route
router.post("/", async (req, res) => {
    const bookmark = await Bookmark.create(req.body).catch(catcher(res))
    res.json(bookmark)
})  

// "/cheese/:id" - update route
router.put("/:id", async (req, res) => {
    const bookmark = await Bookmark.findByIdAndUpdate(req.params.id, req.body).catch(catcher(res))
    res.json(bookmark)
})    

// "/cheese/:id" - delete route
router.delete("/:id", async (req, res) => {
    const bookmark = await Bookmark.findByIdAndRemove(req.params.id).catch(catcher(res))
    res.json(bookmark)
})   

// "/cheese/:id" - show route
router.get("/:id", async (req, res) => {
    const bookmark = await Bookmark.findById(req.params.id).catch(catcher(res))
    res.json(bookmark)
})  

export default router;