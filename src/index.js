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
   * @param {object} cart - Customer body object
   * @param {object} order - Customer body object
   * @param {string} [lang='en_us'] - Snake case language code, eg.: 'en_us', 'pt_br'
   * @param {string} [themeColor] - RGB color string
   * @returns {Promise}
   */

  welcome (store, customer, lang, themeColor) {
    const data = { store, customer }
    return render('welcome', data, lang, themeColor)
  },

  abandonned_cart (store, customer, cart, lang, themeColor) {
    const data = { store, customer, cart }
    return render('abandoned-cart', data, lang, themeColor)
  },

  new_order (store, customer, order, lang, themeColor) {
    const data = { store, customer, order }
    return render('new-order', data, lang, themeColor)
  },

  delivered (store, customer, order, lang, themeColor) {
    const data = { store, customer, order }
    return render('delivered', data, lang, themeColor)
  },

  payment (store, customer, order, lang, themeColor) {
    const data = { store, customer, order }
    return render('payment', data, lang, themeColor)
  },

  shipped (store, customer, order, lang, themeColor) {
    const data = { store, customer, order }
    return render('shipped', data, lang, themeColor)
  }

}

/**
 * @namespace transactionalMails
 */
