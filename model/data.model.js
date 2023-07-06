const mongoose = require("mongoose")

const dataSchema = mongoose.Schema({
    title : String,
    author : String,
    genre : String,
    description : String,
    price : String
})


const DataModel = mongoose.model("data" , dataSchema)

module.exports={
    DataModel
}