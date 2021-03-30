'use strict'

// const { createConfigItem } = require("@babel/core")
const express=require("express")
// const send = require("send")
const validator=require("../middleware/validator.js")
const Clothes=require("../models/clothes")
const clothes=new Clothes()
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
const resData=clothes.read()
res.json(resData)
}

function getID(req,res){
    const data=clothes.read(req.params.id)
    res.json(data    )
}

function savingData(req,res){
    const getData=req.body;
    const data=clothes.create(getData)
res.json(data)
}

function updateData(req,res){
let data=clothes.update(req.params.id,req.body)
res.json(data)
    
}

function deleteData(req,res){
    let data=clothes.delete(req.params.id)
    res.json(data)
}

module.exports=router