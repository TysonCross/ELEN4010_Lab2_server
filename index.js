// let path = require('path')
let express = require('express')
let app = express()
let mainRouter = require('./mainRoutes')

app.use(mainRouter)

let port = process.env.port || 3000
app.listen(port)

console.log('Express server running on port ', port)