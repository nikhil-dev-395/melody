import mongoose from "mongoose";
// this is our database name
const db_name = "melody"

const dbConnect = async() => {
    try {
        let con = await mongoose.connect( `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@${process.env.MONGODB_CLUSTER}/${db_name}`);
        console.log("host :"+con.connection.host);
    } catch (error) {
        console.log("error is occurred at dbConnect",error);
    }
}

export {dbConnect}
