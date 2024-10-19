const mongoose=require("mongoose");

const ContactSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
        required:true,
        unique:true
    }
})

const contactList=mongoose.model('contactList',ContactSchema);
module.exports=contactList