// server.js

// BASE SETUP
// =============================================================================

// call the packages we need
const express = require('express') // call express
const app = express() // define our app using express
const bodyParser = require('body-parser')

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// app.use(express.static('public'))

// configure app to use CORS
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  )
  next()
})

const port = process.env.PORT || 8080 // set our port

// REGISTER OUR ERROR HANDLERS -----------------------
const logErrors = (err, req, res, next) => {
  console.log('-- ERROR')
  console.error(err.stack)
  next(err)
}

const errorHandler = (err, req, res, next) => {
  res.status(500).send({ error: 'Something failed!...' })
}

app.use(logErrors)
app.use(errorHandler)

// START THE SERVER
// =============================================================================
app.listen(port)
console.log('Magic happens on port ' + port)
console.log(`🚀 Server ready at http://localhost:${port}`)
