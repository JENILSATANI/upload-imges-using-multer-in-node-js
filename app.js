const mongoose = require("mongoose")
const nameSchmea = mongoose.Schema({
    photo: {
          type:String,
          required:true
    }

})
const images = mongoose.model("images", nameSchmea)
module.exports = images