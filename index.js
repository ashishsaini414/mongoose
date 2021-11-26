const express = require("express")
const app = express()
const bodyParser = require("body-parser");
const mongoose = require("mongoose")
const routes = require("./components/route");
const port = 8000;

app.use(bodyParser.json())

app.use(routes)
//connection establishing with mongoose

mongoose.connect("mongodb://localhost:27017/householdItems",{
    useNewUrlParser: "true"
})

mongoose.connection.on("error",(err)=>{
    console.log("error", err)
})

mongoose.connection.on("connected", (err, res) => {
    console.log("mongoose is connected")
  });

app.listen(port , ()=>{
    console.log("Server is listening to this port - " + port)
})