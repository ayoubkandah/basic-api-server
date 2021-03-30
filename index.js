'use strict'
const server=require("./src/server")

const port=process.env.PORT||4500
server.Start(port)