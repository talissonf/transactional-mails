'use strict'

// load the lib object
const {
  welcome,
  pending,
  abandonedCart,
  delivered,
  authorized,
  shipped,
  unauthorized,
  voided,
  underAnalysis,
  partiallyPaid,
  paid,
  inDispute,
  partiallyRefunded,
  refunded,
  invoice_issued,
  inProduction,
  inSeparation,
  readyForShipping,
  partiallyShipped,
  partiallyDelivered,
  returnedForExchange,
  receivedForExchange,
  returned,
  new_order
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
      route: '/new_order',
      handle (req, res, next) {
        new_order(store, customer, order, 'pt_br')
          .then(html => res.end(html))
          .catch(err => console.error(err))
      }
    },
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
      route: '/pending',
      handle (req, res, next) {
        pending(store, customer, order, 'pt_br')
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
      route: '/authorized',
      handle (req, res, next) {
        authorized(store, customer, order, 'pt_br')
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
    },
    {
      route: '/unauthorized',
      handle (req, res, next) {
        unauthorized(store, customer, order, 'pt_br')
          .then(html => res.end(html))
          .catch(err => console.error(err))
      }
    },
    {
      route: '/voided',
      handle (req, res, next) {
        voided(store, customer, order, 'pt_br')
          .then(html => res.end(html))
          .catch(err => console.error(err))
      }
    },
    {
      route: '/under_analysis',
      handle (req, res, next) {
        underAnalysis(store, customer, order, 'pt_br')
          .then(html => res.end(html))
          .catch(err => console.error(err))
      }
    },
    {
      route: '/partially_paid',
      handle (req, res, next) {
        partiallyPaid(store, customer, order, 'pt_br')
          .then(html => res.end(html))
          .catch(err => console.error(err))
      }
    },
    {
      route: '/paid',
      handle (req, res, next) {
        paid(store, customer, order, 'pt_br')
          .then(html => res.end(html))
          .catch(err => console.error(err))
      }
    },
    {
      route: '/in_dispute',
      handle (req, res, next) {
        inDispute(store, customer, order, 'pt_br')
          .then(html => res.end(html))
          .catch(err => console.error(err))
      }
    },
    {
      route: '/partially_refunded',
      handle (req, res, next) {
        partiallyRefunded(store, customer, order, 'pt_br')
          .then(html => res.end(html))
          .catch(err => console.error(err))
      }
    },
    {
      route: '/refunded',
      handle (req, res, next) {
        refunded(store, customer, order, 'pt_br')
          .then(html => res.end(html))
          .catch(err => console.error(err))
      }
    },
    {
      route: '/invoice_issued',
      handle (req, res, next) {
        invoice_issued(store, customer, order, 'pt_br')
          .then(html => res.end(html))
          .catch(err => console.error(err))
      }
    },
    {
      route: '/in_production',
      handle (req, res, next) {
        inProduction(store, customer, order, 'pt_br')
          .then(html => res.end(html))
          .catch(err => console.error(err))
      }
    },
    {
      route: '/in_separation',
      handle (req, res, next) {
        inSeparation(store, customer, order, 'pt_br')
          .then(html => res.end(html))
          .catch(err => console.error(err))
      }
    },
    {
      route: '/ready_for_shipping',
      handle (req, res, next) {
        readyForShipping(store, customer, order, 'pt_br')
          .then(html => res.end(html))
          .catch(err => console.error(err))
      }
    },
    {
      route: '/partially_shipped',
      handle (req, res, next) {
        partiallyShipped(store, customer, order, 'pt_br')
          .then(html => res.end(html))
          .catch(err => console.error(err))
      }
    },
    {
      route: '/partially_delivered',
      handle (req, res, next) {
        partiallyDelivered(store, customer, order, 'pt_br')
          .then(html => res.end(html))
          .catch(err => console.error(err))
      }
    },
    {
      route: '/returned_for_exchange',
      handle (req, res, next) {
        returnedForExchange(store, customer, order, 'pt_br')
          .then(html => res.end(html))
          .catch(err => console.error(err))
      }
    },
    {
      route: '/received_for_exchange',
      handle (req, res, next) {
        receivedForExchange(store, customer, order, 'pt_br')
          .then(html => res.end(html))
          .catch(err => console.error(err))
      }
    },
    {
      route: '/returned',
      handle (req, res, next) {
        returned(store, customer, order, 'pt_br')
          .then(html => res.end(html))
          .catch(err => console.error(err))
      }
    },
  ],

  // watch template source files and reload local server
  watch: true,
  files: [ 'partials/*.ejs', 'views/*.ejs', 'scss/*.scss', 'i18n/*.json' ]
})
