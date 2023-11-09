const mongoose = require('mongoose');

async function connectToDatabase() {
    try {
        const db = 'mongodb://127.0.0.1:27017/ql_banhang'
        await mongoose.connect(db);
    } catch (error) {
        console.error('Error connecting to the database:', error);
    }
}
module.exports = { connectToDatabase };
