const mongoose = require("mongoose")
const nameSchmea = mongoose.Schema({
    name: {
     type:String,
     require:true
    },
    gmail: {
        type:String,
        require:true
    },
    password: {
        type:String,
        require:true    
    },
    photo: {
        type: String,
        // required: true
    },
    photo_path: {
        type: String
    }

})
const images = mongoose.model("images", nameSchmea)
module.exports = images