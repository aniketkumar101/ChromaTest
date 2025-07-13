const mongoose = require('mongoose');


require('dotenv').config();

const DBURL = process.env.MONGO_URI;
const DBNAME = process.env.MONGO_DB;

async function dbconnect() {
    try {
        await mongoose.connect(`${DBURL}/${DBNAME}`);
        console.log("✅ MongoDB Atlas Connected");
    } catch (error) {
        console.error("❌ MongoDB Connection Error:", error);
    }
}

module.exports = dbconnect;


