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
   *
   * @example

transactionalMails.welcome(store, customer, 'pt_br')
  .then(html => sendEmail(html, options))
  .catch(err => console.error(err))

   */

  welcome (store, customer, lang) {
    const data = { store, customer }
    return render('welcome', data, store, lang)
  },

  /**
   * @method
   * @memberof transactionalMails
   * @description Returns HTML markup for abandoned cart email.
   * @param {object} store - Store body object
   * @param {object} customer - Customer body object
   * @param {object} cart - Cart body object
   * @param {string} [lang='en_us'] - Snake case language code, eg.: 'en_us', 'pt_br'
   * @returns {Promise}
   *
   * @example

transactionalMails.abandonedCart(store, customer, cart, 'pt_br')
  .then(html => sendEmail(html, options))
  .catch(err => console.error(err))

   */

  abandonedCart (store, customer, cart, lang) {
    const data = { store, customer, cart }
    return render('abandoned-cart', data, store, lang)
  },

  /**
   * @method
   * @memberof transactionalMails
   * @description Returns HTML markup for new order email.
   * @param {object} store - Store body object
   * @param {object} customer - Customer body object
   * @param {object} order - Order body object
   * @param {string} [lang='en_us'] - Snake case language code, eg.: 'en_us', 'pt_br'
   * @returns {Promise}
   *
   * @example

transactionalMails.newOrder(store, customer, order, 'pt_br')
  .then(html => sendEmail(html, options))
  .catch(err => console.error(err))

   */

  newOrder (store, customer, order, lang) {
    const data = { store, customer, order }
    return render('new-order', data, store, lang)
  },

  /**
   * @method
   * @memberof transactionalMails
   * @description Returns HTML markup for delivered order email.
   * @param {object} store - Store body object
   * @param {object} customer - Customer body object
   * @param {object} order - Order body object
   * @param {string} [lang='en_us'] - Snake case language code, eg.: 'en_us', 'pt_br'
   * @returns {Promise}
   *
   * @example

transactionalMails.delivered(store, customer, order, 'pt_br')
  .then(html => sendEmail(html, options))
  .catch(err => console.error(err))

   */

  delivered (store, customer, order, lang) {
    const data = { store, customer, order }
    return render('delivered', data, store, lang)
  },

  /**
   * @method
   * @memberof transactionalMails
   * @description Returns HTML markup for payment received email.
   * @param {object} store - Store body object
   * @param {object} customer - Customer body object
   * @param {object} order - Order body object
   * @param {string} [lang='en_us'] - Snake case language code, eg.: 'en_us', 'pt_br'
   * @returns {Promise}
   *
   * @example

transactionalMails.payment(store, customer, order, 'pt_br')
  .then(html => sendEmail(html, options))
  .catch(err => console.error(err))

   */

  payment (store, customer, order, lang) {
    const data = { store, customer, order }
    return render('payment', data, store, lang)
  },

  /**
   * @method
   * @memberof transactionalMails
   * @description Returns HTML markup for order shipped email.
   * @param {object} store - Store body object
   * @param {object} customer - Customer body object
   * @param {object} order - Order body object
   * @param {string} [lang='en_us'] - Snake case language code, eg.: 'en_us', 'pt_br'
   * @returns {Promise}
   *
   * @example

transactionalMails.shipped(store, customer, order, 'pt_br')
  .then(html => sendEmail(html, options))
  .catch(err => console.error(err))

   */

  shipped (store, customer, order, lang) {
    const data = { store, customer, order }
    return render('shipped', data, store, lang)
  },

  /**
   * @method
   * @memberof transactionalMails
   * @description Returns HTML markup for payment denied email.
   * @param {object} store - Store body object
   * @param {object} customer - Customer body object
   * @param {object} order - Order body object
   * @param {string} [lang='en_us'] - Snake case language code, eg.: 'en_us', 'pt_br'
   * @returns {Promise}
   *
   * @example

transactionalMails.denied(store, customer, order, 'pt_br')
  .then(html => sendEmail(html, options))
  .catch(err => console.error(err))

   */

  denied (store, customer, order, lang) {
    const data = { store, customer, order }
    return render('denied', data, store, lang)
  },

  /**
   * @method
   * @memberof transactionalMails
   * @description Returns HTML markup for order canceled email.
   * @param {object} store - Store body object
   * @param {object} customer - Customer body object
   * @param {object} order - Order body object
   * @param {string} [lang='en_us'] - Snake case language code, eg.: 'en_us', 'pt_br'
   * @returns {Promise}
   *
   * @example

transactionalMails.canceled(store, customer, order, 'pt_br')
  .then(html => sendEmail(html, options))
  .catch(err => console.error(err))

   */

  canceled (store, customer, order, lang) {
    const data = { store, customer, order }
    return render('canceled', data, store, lang)
  }

}

/**
 * @namespace transactionalMails
 */
