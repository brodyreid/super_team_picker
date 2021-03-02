const express = require('express')
const router = express.Router()

router.get('/', (request, response) => {
    response.render('home')
  })
  
  router.get('/cohorts', (request, response) => {
      response.render('current')
  })

router.get('/cohorts/new', (request, response) => {
    response.render('new')
})

  
//   router.get('/contact_us', (request, response) => response.render('contact'))
  
//   router.get('/thank_you', (request, response) => {
  
//     const { name, email, message } = request.query

//     response.render('thank_you', {
//       name, // name: name
//       email,
//       message,
//     })
//   })
  
//   router.get('/survey', (request, response) => {
//     const cats = [
//       'Persian',
//       'Garfield',
//       'Sylvester',
//       'Chester',
//     ]
  
//     const cheeses = [
//       'Classic American Cheddar',
//       'Feta',
//       'Gouda',
//       'Blue',
//       'Brie',    
//     ]
  
//     const { name, colour, cat, cheese } = request.query
//     response.render('survey', {
//       cats, // cats: cats
//       cheeses,
//       name,
//       favouriteColour: colour,
//       favouriteCat: cat,
//       favouriteCheese: cheese,
//     })
//   })
  
  const COOKIE_MAX_AGE = 1000 * 60 * 60 * 24 * 30 // number of milliseconds in 30 days
  router.post('/sign_in', (request, response) => {

    const { username } = request.body
  
    response.cookie("username", username, { maxAge: COOKIE_MAX_AGE })

    response.redirect('/')
  })
  
  router.post('/sign_out', (request, response) => {
    response.clearCookie('username')
    response.redirect('/')
  })

  module.exports = router