// Importing mongoose and dotenv
import mongoose from "mongoose";
import dotenv from "dotenv";

// get dotenv vars
dotenv.config();

// Mongo database configuration
const DATABASE_URL = process.env.DATABASE_URL;

// Connect to the database
mongoose.set('strictQuery', false);
mongoose.connect(DATABASE_URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
});

// Connection message handler
mongoose.connection
.on("open", () => console.log("Connected to mongodb"))
.on("close", () => console.log("Disconnected from mongodb"))
.on("error", (error) => console.log(error))

export default mongoose;