// Packages
const express = require('express')
const router = express.Router()

// Views
// Create here a controller that accepts GET requests and renders the "search" page
router.get('/', (req, res) => {
  let user = 'John Doe'
  res.render('search', { user })
  //console.log(req)
})

// Export
module.exports = router
