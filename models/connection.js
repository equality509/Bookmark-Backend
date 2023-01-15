import mongoose from "mongoose";
import dotenv from "dotenv";

// get dotenv vars
dotenv.config();

const DATABASE_URL = process.env.DATABASE_URL;

// connect to the database
mongoose.set('strictQuery', false);
mongoose.connect(DATABASE_URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
});

// connection message handler
mongoose.connection
.on("open", () => console.log("Connected to mongodb"))
.on("close", () => console.log("Disconnected from mongodb"))
.on("error", (error) => console.log(error))

export default mongoose;