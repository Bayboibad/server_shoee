const mongoose = require('mongoose');

async function connectToDatabase() {
    try {
        const db = 'mongodb+srv://Picsums:Long16203@cluster0.pva3ymt.mongodb.net/'
        await mongoose.connect(db);
    } catch (error) {
        console.error('Error connecting to the database:', error);
    }
}
module.exports = { connectToDatabase };
