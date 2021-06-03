const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const port = process.env.PORT || 3000

const app = express()

app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

app.get('/', (req,res)=>{
    res.send('hello backend')
    console.log('welcome to our backend')
})

app.listen(port, ()=>{
    console.log('listening on port ' + port)
})