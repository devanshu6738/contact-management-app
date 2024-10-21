const express=require("express")
const app=express();
const PORT=3000;
const db=require("./connect")
const routes=require("./routes/contact")
const path=require("path")
const methodOverride = require('method-override');
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
// middleware
app.use(express.json())
app.set("view engine", "ejs"); 
app.set("views",path.resolve("./views"))

app.use('/contact',routes)


app.listen(PORT,(req,res)=>{
    console.log(`Server is running at port ${PORT}`)
})