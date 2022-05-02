const express = require('express')
const app = express()
app.use(express.json())

const router = require('./router/router')
app.use('/', router)



app.listen(5050, () => {
    console.log("server is run 5050")
})