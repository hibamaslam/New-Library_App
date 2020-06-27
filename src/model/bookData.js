
//mongoose definition
const mongoose = require("mongoose");

//database connection
mongoose.connect('mongodb://localhost:27017/library');

//schema definition
const Schema = mongoose.Schema;
const bookSchema = new Schema({
    title:String,
    author:String,
    genre:String,
    ratings:String,
    description:String,
    image:String
});

//model
const Bookdata = mongoose.model('bookdata',bookSchema);

//exporting model
module.exports=Bookdata;
