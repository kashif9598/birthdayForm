require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const connectDB = require('./db/connect');
const people_routes = require('./routes/peoples');

app.get('/', (req, res) => {
    res.send('Hello World')
})

//middleware
app.use(express.json());
// app.use(express.urlencoded());
app.use('/api',people_routes)

const start = async () => {
    try {
        await connectDB(process.env.MONGODB_URL)
        app.listen(PORT, () => {
            console.log(`Server running on PORT ${PORT}`)
        })
    } catch (error) {
        console.log(error)        
    }
}

start()