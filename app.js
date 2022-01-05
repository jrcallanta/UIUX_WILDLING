const express = require('express')
const port = 3000
const app = express()

app.use(express.static(__dirname + '/public'))

app.get("/", (req, res)=>{
  res.sendFile(__dirname + "/index.html")
})

app.listen(process.env.PORT || port, ()=>{
  console.log("Server has started succesfully!");
})
