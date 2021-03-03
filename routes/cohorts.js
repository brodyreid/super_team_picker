const { response } = require('express')
const knex = require('../db/client')
const router = require('express').Router()

router.get('/', (request, response) => {
    response.render('home')
})

router.get('/cohorts/new', (request, response) => {
  response.render('new')
})

router.get('/cohorts', (request, response) => {
    const query = knex('cohorts')
      .orderBy('createdAt', 'DESC')
      .then(cohorts => {
        response.render('current', { cohorts })
    })
})

router.post('/cohorts', (request, response) => {
  const { logo, name, members } = request.body

  knex('cohorts')
    .insert(
      {
        logo,
        name,
        members,
      },
      '*'
    )
    .then((data) => {
      console.table(data)
      response.send(data)
    })
})

// router.get('/confirmed', (request, response) => {
  
//   const { logo, name, members } = request.query

//   response.render('confirmed', {
//     logo,
//     name,
//     members,
//   })
// })
  
module.exports = router