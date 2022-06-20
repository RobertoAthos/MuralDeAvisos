const express = require('express')
const app = express()
const apiRoute = require('./Routes/api')
const path = require('path')

app.use('/api', apiRoute)
app.use('/',express.static(path.join(__dirname, "Public")))

const PORT = 3000
app.listen(PORT, ()=>{console.log("Server rodando na porta", PORT)})