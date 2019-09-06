const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI');

const connectDB = async () => {
    try {
        await mongoose.connect(db, {
            useNewUrlParser: true,
            useCreateIndex: true,
            useFindAndModify: false
        });
        console.log('Connceted to mongodb')
    } catch(err) {
        console.log(err.message);
        // exist process with failture
        process.exit(1);
    }
}

module.exports = connectDB;