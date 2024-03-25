import { userRouter } from "./src/routes/user.route.js";
import express from "express";
const app = express();
import cors from "cors"
// import cookieParser from "cookie-parser";
// import { verifyUser } from "./src/auth/verifyUser.js";
// import jwt from "jsonwebtoken";

app.use(express.json());
// app.use(express.urlencoded({extended:true}));

// app.use(cors({
//     origin: "http://localhost:5173",
//     method: ["GET", "POST", "PUT", "DELETE"],
//     credentials: true
// }));

// app.use(cookieParser())

//importing files for routing
app.use("/api/v1/user", userRouter)


// app.use("/api/v1/playlist")
// app.use("/api/v1/history")
// app.use("/api/v1/artist");
// app.use("/api/v1/song")





export { app }