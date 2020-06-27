
//mongoose definition
const mongoose = require("mongoose");

//database connection
mongoose.connect('mongodb://localhost:27017/library');

//schema definition
const Schema = mongoose.Schema;
const userSchema = new Schema({
    user_name:String,
    user_email:String,
    user_password:String
});

//model
const Userdata = mongoose.model('userdata',userSchema);

//exporting model
module.exports=Userdata;
