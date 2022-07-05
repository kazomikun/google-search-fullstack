// Import Packages
const express = require('express')
const router = express.Router()

// Create POST controller

// Views
// Create here a controller that accepts GET requests and renders the "search" page
router.get('/results', (req, res) => {
  let results = [
    {
      title: 'Javascript Tutorial',
      description:
        'Well organized and easy to understand Web building tutorials with lots of examples of how to use HTML, CSS, JavaScript, SQL, PHP, Python, Bootstrap, Java',
      url: 'https://www.w3schools.com',
      links: [
        {
          title: 'JavaScript Introduction',
          url: 'https://www.w3schools.com/js'
        },
        {
          title: 'JS Functions',
          url: 'https://www.w3schools.com/js'
        },
        {
          title: 'JavaScript Examples',
          url: 'https://www.w3schools.com/js'
        }
      ]
    },
    {
      title: 'Javascript | MDN',
      description:
        'JavaScript (JS) is a lightweight, interpreted or just-in-time compilied programming language with first class functions. While it is well-known as the scripting language for web page, CouchDB and Adobe Acrobat',
      url: 'developer.mozilla.org',
      links: [
        {
          title: 'JavaScript Operator',
          url: 'https://www.w3schools.com/js'
        },
        {
          title: 'JavaScript Code',
          url: 'https://www.w3schools.com/js'
        },
        {
          title: 'JavaScript Meaning',
          url: 'https://www.w3schools.com/js'
        }
      ]
    },
    {
      title: 'Javascript Wikipedia',
      description:
        'JavaScript (often abbrievated as JS is a programming language that conforms to the ECMAScript specification, JavaScript is a high-level often just-in-time.',
      url: 'en.wikipedia.org',
      links: [
        {
          title: 'JavaScript Online',
          url: 'https://www.w3schools.com/js'
        },
        {
          title: 'JavaScript Definition',
          url: 'https://www.w3schools.com/js'
        }
      ]
    }
  ]
  res.render('results', { results })
})

// Export module
module.exports = router
