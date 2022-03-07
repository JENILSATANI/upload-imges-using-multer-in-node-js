const express = require('express')
const app = express()
const mongoose = require('mongoose')
// mongoose.connect("mongodb://localhost:27017/upload").then(() => {
//     console.log(`connected successfully`);
// }).catch((err) => console.log(`not succesflly`))

const db = 'mongodb+srv://jenilsatani:jenilsatani123@cluster0.d2ai8.mongodb.net/upload?retryWrites=true&w=majority'
mongoose.connect(db).then(() => {
    console.log(`connected successfully`);
}).catch((err) => console.log(`not succesflly`))

const images = require("./app")
const userUpload = require('./routes/index')

app.use('/user' , userUpload , images)


app.listen(8500,() => console.log("BOOMMMM"))