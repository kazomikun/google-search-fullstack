// Packages
const express = require('express')
const router = express.Router()

// Views
// Create here a controller that accepts GET requests and renders the "search" page
router.get('/', (req, res) => {
  res.render('search')
  //console.log(req)
})

// Export
module.exports = router
