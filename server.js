const express =require("express")
const cors =require("cors")
const body_parser =require("body-parser")
const app = express()
app.use(cors())
app.use(express.json())
 
 
let data=[]

app.get("/saira",(req,res)=>{
  
    res.send({"data":data})

})

app.post("/postdata",(req,res)=>{

    const {body} = req
    let obj={
        "name":body.name,
        "age":body.age
    }
    data.push(obj)
    res.send("saved")
})



app.listen(5000,async(req,res)=>{
 
    console.log("Server is running on port 5000...");

})




