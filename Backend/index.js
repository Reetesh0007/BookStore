import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import bookRoute from "./route/book.route.js";
import userRoute from "./route/user.route.js";


// Load environment variables
dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb+srv://Reetesh:Password@bookstore.re1qzkv.mongodb.net/Bookstore?retryWrites=true&w=majority&appName=Bookstore")

const PORT = process.env.PORT || 4000;
const URI = process.env.MongoDBURI;

// Connect to MongoDB
mongoose.connect(URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch(error => console.log("Error:", error));

// Defining routes
app.use("/book", bookRoute);
app.use("/user", userRoute);

app.listen(PORT, () => {
  console.log(`Bookstore app listening on port ${PORT}`);
});
