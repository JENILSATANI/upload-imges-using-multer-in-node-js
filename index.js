const express = require('express')
const app = express()
const mongoose = require('mongoose')
const db = 'mongodb+srv://jenilsatani:jenilsatani123@cluster0.d2ai8.mongodb.net/upload?retryWrites=true&w=majority'
mongoose.connect(db).then(() => {
    console.log(`connected successfully`);
}).catch((err) => console.log(`not succesflly`))
const cors = require('cors')
const corsOptions = {
    origin: '*'
}

app.use(cors(corsOptions))

const userUpload = require('./routes/index')
app.use('/user', express.static('public'))

app.use('/api', userUpload);    


app.listen(8600, () => console.log("BOOMMMM"))