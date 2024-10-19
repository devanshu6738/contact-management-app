const mongoose=require("mongoose")
const URL="mongodb://localhost:27017/contactManagement"
mongoose.connect(URL,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
})

const db=mongoose.connection;
db.on("connected",()=>{
    console.log("mongodb server is connected")
})
db.on("disconnected",()=>{
    console.log("mongodb server is disconnected")
})
db.on("error",(error)=>{
    console.log(error)
})

module.exports=db;