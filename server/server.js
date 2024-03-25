import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
import cookieParser from "cookie-parser";
const app = express();
const port = process.env.PORT;

//importing files here ...
import { dbConnect } from "./src/db/dbConnect.db.js";
import { userRouter } from "./src/routes/User.routes.js";

//middlewares
app.use(cookieParser());
app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:5173"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);


/*  ROUTE   */ 
app.use("/user", userRouter);

/*  STARTING SERVER */ 
const startServer = async () => {
  try {
    await dbConnect();
    await app.listen(port, () => {
      console.log(`server is listening on ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

startServer();
