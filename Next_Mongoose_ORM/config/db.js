import mongoose from "mongoose"

const connection = {

}
async function dbConnect() {
    if (connection.isConnected) {
        return
    }
    const db = await mongoose.connect(process.env.DATABASE_CONNECTION_STRING)
    console.log("db", db);
    connection.isConnected = db.connection[0].readyState;
}

export default dbConnect