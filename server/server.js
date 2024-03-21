import dotenv from "dotenv";
dotenv.config({
    path:"./src/config/config.env"
})
import {app} from "./app.js"
import { dbConnect } from "./src/db/dbConnect.db.js";
const port = process.env.PORT;


const startServer =async () => {
   try {
    await dbConnect()
     await app.listen(port, () => {
        console.log("server is listening on "+port);
    })
   
   } catch (error) {
    console.log("server error",error);
   }
}
startServer()