import express from "express";
import dotenv from "dotenv";
import path from "path";
import cors from "cors";
import { connectDB } from "./config/database";
dotenv.config();

const boostrap = () => {
  connectDB().then(() => {
    const app = express();
    app.use(cors());
    app.use(express.static(path.join(__dirname, "public")));
    app.use(express.urlencoded({ extended: false }));
    app.use(express.json());

    app.use("/", (req, res) => {
      res.redirect('/html/home.html')
    });

    app.listen(process.env["PORT"], () => {
      console.log(`app is listen at port ${process.env["PORT"]}`);
    });
  });
};

boostrap();

export default boostrap;
