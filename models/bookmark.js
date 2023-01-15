// import mongoose connection
import mongoose from "./connection.js";

// Schema model mongoose connection
const { Schema, model } = mongoose;

// Bookmark Schema
const bookmarkSchema = new Schema({
    title: String,
    url: String
}, {timestamps: true})

// Bookmark model
const Bookmark = model("Bookmark", bookmarkSchema)

export default Bookmark;

