'use strict'

// load the lib object
const {
  welcome,
  newOrder,
  abandonedCart,
  delivered,
  payment,
  shipped
} = require('./../src/')

// sample JSON data
const store = require('./data/store.json')
const customer = require('./data/customer.json')
const cart = require('./data/cart.json')
const order = require('./data/order.json')

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
    },
    {
      route: '/abandoned-cart',
      handle (req, res, next) {
        abandonedCart(store, customer, cart, 'pt_br')
          .then(html => res.end(html))
          .catch(err => console.error(err))
      }
    },
    {
      route: '/new-order',
      handle (req, res, next) {
        newOrder(store, customer, order, 'pt_br')
          .then(html => res.end(html))
          .catch(err => console.error(err))
      }
    },
    {
      route: '/delivered',
      handle (req, res, next) {
        delivered(store, customer, order, 'pt_br')
          .then(html => res.end(html))
          .catch(err => console.error(err))
      }
    },
    {
      route: '/payment',
      handle (req, res, next) {
        payment(store, customer, order, 'pt_br')
          .then(html => res.end(html))
          .catch(err => console.error(err))
      }
    },
    {
      route: '/shipped',
      handle (req, res, next) {
        shipped(store, customer, order, 'pt_br')
          .then(html => res.end(html))
          .catch(err => console.error(err))
      }
    }
  ],

  // watch template source files and reload local server
  watch: true,
  files: [ 'views/*.ejs', 'scss/*.scss', 'i18n/*.json' ]
})
