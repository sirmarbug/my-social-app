const mongoose = require("mongoose")

const { DB_URL } = process.env

exports.connect = async () => {
    try {
        await mongoose.connect(DB_URL)
        console.log("Successfully connected to database")
    } catch (e) {
        console.log("Database connection failed. Exiting now...")
        console.error(e)
        process.exit(1)
    }
}