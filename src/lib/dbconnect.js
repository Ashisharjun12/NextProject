
import mongoose from "mongoose";

const connection = {}

async function dbConnect(){
    if (connection.isConnected) {
        console.log("Already Connected To Database")

        return
        
    }


    try {

       const db= await mongoose.connect(process.env.MONGO_URI)

       connection.isConnected = db.connection[0].readyState

       console.log("Database connection successfully")
        
    } catch (error) {

        console.log("DB connection Failed " + error)

        process.exit(1)
        
    }
}


export default dbConnect;