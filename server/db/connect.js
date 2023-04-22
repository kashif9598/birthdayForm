const mongoose = require('mongoose');

const connectDB = (uri) => {
    console.log('COnnected to DB')
    return mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
};

module.exports = connectDB;