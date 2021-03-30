'use strict'
const server=require("../src/server")
const superTest=require("supertest");
const { expect, it } = require("@jest/globals");
const request=superTest(server.server)
let id;
let obj={food:"egg"}
let objClothes={clothes:"tshirt"}
describe("Testing Route",()=>{
it("not Found route",async()=>{
    const response=await request.get("/notfound")
    expect(response.status).toEqual(404)
})
it("Bad Method",async()=>{
    const response=await request.patch("/food")
    expect(response.status).toEqual(404)
})

it("POST TEST",async()=>{
const response=await request.post("/food").send(obj)
expect(response.status).toEqual(200)
expect(response.body.data.food).toEqual(obj.food)
id=response.body.id
})

it("GET ARRAY TEST",async()=>{
    const response=await request.get("/food")
    // console.log(response.body,"ssssssssssssssssssssssssssssssssssssssssss")
    expect(response.status).toEqual(200)

    expect(response.body).toEqual( 
      [
        { id: id, data: { food: 'egg' } }
      ]
      )
})
it("GET ID TEST",async()=>{
    const response=await request.get(`/food/${id}`)
    expect(response.status).toEqual(200)

    expect(response.body.data.food).toEqual(obj.food )
})


it("PUT TEST",async ()=>{
const response=await request.put(`/food/${id}`).send({
    food:"hotdog"
})
expect(response.status).toEqual(200)

expect(response.body.data.food).toEqual("hotdog")

})


it("DELETE TEST",async ()=>{
    const response=await request.delete(`/food/${id}`)
    expect(response.status).toEqual(200)

    expect(response.body.data).toEqual()
    
    })
 

    it("POST TEST",async()=>{
    const response=await request.post("/clothes").send(objClothes)
    expect(response.status).toEqual(200)
    expect(response.body.data.clothes).toEqual(objClothes.clothes)
    id=response.body.id
    })
    
    it("GET ARRAY TEST",async()=>{
        const response=await request.get("/clothes")
        // console.log(response.body,"ssssssssssssssssssssssssssssssssssssssssss")
        expect(response.status).toEqual(200)
    
        expect(response.body).toEqual( 
          [
            { id: id, data: { clothes: 'tshirt' } }
          ]
          )
    })
    it("GET ID TEST",async()=>{
        const response=await request.get(`/clothes/${id}`)
        expect(response.status).toEqual(200)
    
        expect(response.body.data.clothes).toEqual(objClothes.clothes )
    })
    
    
    it("PUT TEST",async ()=>{
    const response=await request.put(`/clothes/${id}`).send({
        clothes:"hat"
    })
    expect(response.status).toEqual(200)

    expect(response.body.data.clothes).toEqual("hat")
    
    })
    
    
    it("DELETE TEST",async ()=>{
        const response=await request.delete(`/clothes/${id}`)
        expect(response.status).toEqual(200)

        expect(response.body.data).toEqual()
        
        })
})
