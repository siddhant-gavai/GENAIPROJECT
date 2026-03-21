const mongoose = require("mongoose") ; 

async function connectDB() {
    mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log("Database connected successfully") ;
    })
    .catch((error) => {
        console.log("Error connecting to database" , error) ;
    })
}

module.exports = connectDB ; 