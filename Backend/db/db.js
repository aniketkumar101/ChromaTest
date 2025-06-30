const mongoose = require('mongoose');

async function dbconnect() {
    const DBURL = "mongodb://127.0.0.1:27017";  // <-- Local MongoDB connection string
    const DBNAME = "ChromaTest";  // Your database name

    try {
        await mongoose.connect(`${DBURL}/${DBNAME}`, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("Local DB Connected");
    } catch (error) {
        console.log("Connection Error:", error);
    }
}

module.exports = dbconnect;