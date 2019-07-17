/**
 * https://github.com/ecomclub/transactional-mails
 * @author E-Com Club <ti@e-com.club>
 * @license MIT
 */

'use strict'

// template render function
const render = require('./lib/render')

/**
 * Default transactional email templates for E-Com Plus stores.
 * @module @ecomplus/transactional-mails
 * @exports {@link templates}
 * @example
 * const transactionalMails = require('@ecomplus/transactional-mails')
 */

module.exports = {

  /**
   * @method
   * @memberof transactionalMails
   * @description Returns HTML markup for customer welcome email.
   * @param {object} store - Store body object
   * @param {object} customer - Customer body object
   * @param {string} [lang='en_us'] - Snake case language code, eg.: 'en_us', 'pt_br'
   * @returns {Promise}
   */

  welcome (store, customer, lang) {
    const data = { store, customer }
    return render('welcome', data, store, lang)
  },

  abandonedCart (store, customer, cart, lang) {
    const data = { store, customer, cart }
    return render('abandoned-cart', data, store, lang)
  },

  newOrder (store, customer, order, lang) {
    const data = { store, customer, order }
    return render('new-order', data, store, lang)
  },

  delivered (store, customer, order, lang) {
    const data = { store, customer, order }
    return render('delivered', data, store, lang)
  },

  payment (store, customer, order, lang) {
    const data = { store, customer, order }
    return render('payment', data, store, lang)
  },

  shipped (store, customer, order, lang) {
    const data = { store, customer, order }
    return render('shipped', data, store, lang)
  }

}

/**
 * @namespace transactionalMails
 */
