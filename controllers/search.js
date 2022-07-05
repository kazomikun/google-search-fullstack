// Packages
const express = require('express')
const router = express.Router()

// const app = express()

// Views
// Create here a controller that accepts GET requests and renders the "search" page
router.get('/', (req, res) => {
  let user = 'John Doe'
  res.render('search', { user })
})

// Export
module.exports = router
