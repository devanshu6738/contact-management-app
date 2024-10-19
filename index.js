const express=require("express")
const app=express();
const PORT=3000;
const db=require("./connect")
const routes=require("./routes/contact")

// middleware
app.use(express.json())
app.set("view engine", "ejs"); 
app.use(express.static("public"));
app.use('/contact',routes)

app.listen(PORT,(req,res)=>{
    console.log(`Server is running at port ${PORT}`)
})