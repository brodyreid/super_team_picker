const { response } = require('express')
const { userParams } = require('../db/client')
const knex = require('../db/client')
const router = require('express').Router()

// Homepage
router.get('/', (request, response) => {
    response.render('home')
})

// Create new cohort
router.get('/cohorts/new', (request, response) => {
  response.render('new')
})

// Display current cohorts
router.get('/cohorts', (request, response) => {
    return knex('cohorts')
      .orderBy('createdAt', 'DESC')
      .select('*')
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

// Show specific cohort
router.get('/cohorts/:id', (request, response) => {
  const id = request.params.id

  return knex('cohorts')
    .where('id', id)
    .first()
    .then(cohort => {
      response.render('show', { cohort })
    })
})
  
module.exports = router