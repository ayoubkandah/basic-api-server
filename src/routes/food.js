'use strict'

// const { createConfigItem } = require("@babel/core")
const express=require("express")
// const send = require("send")
const validator=require("../middleware/validator.js")
const Food=require("../models/food")
const food=new Food()
const router=express.Router()

router.get("/",getData)
router.get("/:id",validator,getID)
router.post("/",savingData)
router.put("/:id",validator,updateData)
router.put("/",validator,updateData)
router.delete("/",(req,res)=>{
    throw new Error("500")
})
router.delete("/:id",validator,deleteData)
function getData(req,res){
const resData=food.read()
res.json(resData)
}

function getID(req,res){
    const data=food.read(req.params.id)
    res.json(data    )
}

function savingData(req,res){
    const getData=req.body;
    const data=food.create(getData)
res.json(data)
}

function updateData(req,res){
let data=food.update(req.params.id,req.body)
res.json(data)
    
}

function deleteData(req,res){
    let data=food.delete(req.params.id)
    res.json(data)
}

module.exports=router