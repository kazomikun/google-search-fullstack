// Import Packages
const express = require('express')
const router = express.Router()
const Results = require('../models/results')

// Create POST controller
router.post('/', async (req, res) => {
  // console.log(res)
  //console.log(req.body)

  let searchResults = await Results.find({
    title: {
      $regex: req.body.searchBox
      // $options: “1”,
    }
  })
  console.log(searchResults)

  res.render('results', { searchResults })
})

// Views
// Create here a controller that accepts GET requests and renders the "search" page
router.get('/', (req, res) => {
  console.log(req.body)
  //let searchResults = []
  res.render('results', { searchResults })
})

// Export module
module.exports = router
