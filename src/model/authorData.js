
//mongoose definition
const mongoose = require("mongoose");

//database connection
mongoose.connect('mongodb://localhost:27017/library');

//schema definition
const Schema = mongoose.Schema;
const authorSchema = new Schema({
    name:String,
    born:String,
    genre:String,
    books:String,
    weblink:String,
    image:String
});

//model
const Authordata = mongoose.model('authordata',authorSchema);

//exporting model
module.exports=Authordata;
