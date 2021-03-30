'use strict'
const express=require("express")
const morgan=require("morgan")
const cors=require("cors")
const notFound=require("./Errors/404.js")
const serverError=require("./Errors/5xx.js")
const foodRouter=require("./routes/food")
const clothesRouter=require("./routes/clothes")

const app=express()
app.use(express.json())
app.use(morgan("dev"))
app.use(cors())
app.use("/food",foodRouter)
app.use("/clothes",clothesRouter)
app.use(serverError)
app.use("*",notFound)

module.exports={
    server:app,
    Start:(port)=>{
const PORT=port||4500
app.listen(PORT,()=>{console.log(PORT,"----")})
}
}

app.get("/",(req,res)=>{

res.send("Hello")
})

