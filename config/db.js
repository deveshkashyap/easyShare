
require('dotenv').config();// required to use variable of .env file

const mongoose = require('mongoose');
const URI =process.env.MONGO_CONNECTION_URL;

function connectDB() {
    // Database connection 🥳
    mongoose.connect(URI, {
        useNewUrlParser: true, 
        useUnifiedTopology: true 
        }, err => {
        if(err) throw err;
        console.log('Database Connected 🥳🥳!')
        });
}
// TsDzr9erVoni1m7C

module.exports = connectDB;























// require('dotenv').config();
// const mongoose = require('mongoose');

// function connectDB(){

//     mongoose.connect(process.env.MONGO_CONNECTION_URL, { useNewUrlParser: true, useCreateIndex:true, useUnifiedTopology: true, useFindAndModify : true });

//     const connection = mongoose.connection;

//     connection.once('open', () => {
//         console.log('Database connected 🥳🥳🥳🥳');
//     }).catch(err =>  {
//         console.log('Connection failed ☹️☹️☹️☹️');
//     });
// }

// module.exports = connectDB;