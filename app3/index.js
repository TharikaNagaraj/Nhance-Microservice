const express = require('express')
const app = express()
const router = require("./config/routes")
const configureDatabase =  require("./config/database")

app.use(express.json())
app.use(router)

const port = 3070

// app.use(express.static(path.join(__dirname, '../public')))
app.use('/app3/uploads',express.static('uploads'))
app.listen(port,() => 
{
    console.log("server is running on port",port)
})

configureDatabase()