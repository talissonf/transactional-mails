'use strict'

// load the lib object
const { welcome } = require('./../src/')
// sample JSON data
const store = require('./data/store.json')
const customer = require('./data/customer.json')
// setup dev server with BrowserSync
const browserSync = require('browser-sync').create()

browserSync.init({
  server: './test/',
  middleware: [
    {
      route: '/welcome',
      handle (req, res, next) {
        welcome(store, customer)
          .then(html => res.end(html))
          .catch(err => console.error(err))
      }
    }
  ],

  // watch template source files and reload local server
  watch: true,
  files: [ 'views/*.ejs', 'scss/*.scss', 'i18n/*.json' ]
})
