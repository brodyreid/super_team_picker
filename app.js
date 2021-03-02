// Packages
const logger = require('morgan')
const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')
const methodOverride = require('method-override')

const app = express()
const cohortRouter = require('./routes/cohorts')

// Set up engine
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())

// Set up connection
const PORT = 3000
const ADDRESS = 'localhost' //127.0.0.1

app.listen(PORT, ADDRESS, () => {
    console.log(`Server listening on http://${ADDRESS}:${PORT}`)
})

app.use('/', cohortRouter)

module.exports = app