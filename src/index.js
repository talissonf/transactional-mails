/**
 * https://github.com/ecomclub/transactional-mails
 * @author E-Com Club <ti@e-com.club>
 * @license MIT
 */

'use strict'

// Node.js i18n support
require('./intl')

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

  welcome (store, customer, lang, custom_message) {
    const data = { store, customer, custom_message }
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

  abandonedCart (store, customer, cart, lang, custom_message) {
    const data = { store, customer, cart, custom_message }
    return render('abandoned-cart', data, store, lang)
  },

  /**
   * @method
   * @memberof transactionalMails
   * @description Returns HTML markup for pending payment email.
   * @param {object} store - Store body object
   * @param {object} customer - Customer body object
   * @param {object} order - Order body object
   * @param {string} [lang='en_us'] - Snake case language code, eg.: 'en_us', 'pt_br'
   * @returns {Promise}
   *
   * @example

transactionalMails.pending(store, customer, order, 'pt_br')
  .then(html => sendEmail(html, options))
  .catch(err => console.error(err))

   */

  pending (store, customer, order, lang, custom_message) {
    const data = { store, customer, order, custom_message }
    return render('pending', data, store, lang)
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

  delivered (store, customer, order, lang, custom_message) {
    const data = { store, customer, order, custom_message }
    return render('delivered', data, store, lang)
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

  shipped (store, customer, order, lang, custom_message) {
    const data = { store, customer, order, custom_message }
    return render('shipped', data, store, lang)
  },

  /**
   * @method
   * @memberof transactionalMails
   * @description Returns HTML markup for payment unauthorized email.
   * @param {object} store - Store body object
   * @param {object} customer - Customer body object
   * @param {object} order - Order body object
   * @param {string} [lang='en_us'] - Snake case language code, eg.: 'en_us', 'pt_br'
   * @returns {Promise}
   *
   * @example

transactionalMails.unauthorized(store, customer, order, 'pt_br')
  .then(html => sendEmail(html, options))
  .catch(err => console.error(err))

   */

  unauthorized (store, customer, order, lang, custom_message) {
    const data = { store, customer, order, custom_message }
    return render('unauthorized', data, store, lang)
  },

  /**
   * @method
   * @memberof transactionalMails
   * @description Returns HTML markup for order voided email.
   * @param {object} store - Store body object
   * @param {object} customer - Customer body object
   * @param {object} order - Order body object
   * @param {string} [lang='en_us'] - Snake case language code, eg.: 'en_us', 'pt_br'
   * @returns {Promise}
   *
   * @example

transactionalMails.voided(store, customer, order, 'pt_br')
  .then(html => sendEmail(html, options))
  .catch(err => console.error(err))

   */

  voided (store, customer, order, lang, custom_message) {
    const data = { store, customer, order, custom_message }
    return render('voided', data, store, lang)
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

transactionalMails.underAnalysis(store, customer, order, 'pt_br')
  .then(html => sendEmail(html, options))
  .catch(err => console.error(err))

   */

  underAnalysis (store, customer, order, lang, custom_message) {
    const data = { store, customer, order, custom_message }
    return render('under_analysis', data, store, lang)
  },

  /**
   * @method
   * @memberof transactionalMails
   * @description Returns HTML markup for partially paid order email.
   * @param {object} store - Store body object
   * @param {object} customer - Customer body object
   * @param {object} order - Order body object
   * @param {string} [lang='en_us'] - Snake case language code, eg.: 'en_us', 'pt_br'
   * @returns {Promise}
   *
   * @example

transactionalMails.partiallyPaid(store, customer, order, 'pt_br')
  .then(html => sendEmail(html, options))
  .catch(err => console.error(err))

   */

  partiallyPaid (store, customer, order, lang, custom_message) {
    const data = { store, customer, order, custom_message }
    return render('partially_paid', data, store, lang)
  },

  /**
   * @method
   * @memberof transactionalMails
   * @description Returns HTML markup for paid order email.
   * @param {object} store - Store body object
   * @param {object} customer - Customer body object
   * @param {object} order - Order body object
   * @param {string} [lang='en_us'] - Snake case language code, eg.: 'en_us', 'pt_br'
   * @returns {Promise}
   *
   * @example

transactionalMails.paid(store, customer, order, 'pt_br')
  .then(html => sendEmail(html, options))
  .catch(err => console.error(err))

   */

  paid (store, customer, order, lang, custom_message) {
    const data = { store, customer, order, custom_message }
    return render('paid', data, store, lang)
  },

  /**
   * @method
   * @memberof transactionalMails
   * @description Returns HTML markup for order in dispute email.
   * @param {object} store - Store body object
   * @param {object} customer - Customer body object
   * @param {object} order - Order body object
   * @param {string} [lang='en_us'] - Snake case language code, eg.: 'en_us', 'pt_br'
   * @returns {Promise}
   *
   * @example

transactionalMails.inDispute(store, customer, order, 'pt_br')
  .then(html => sendEmail(html, options))
  .catch(err => console.error(err))

   */

  inDispute (store, customer, order, lang, custom_message) {
    const data = { store, customer, order, custom_message }
    return render('in_dispute', data, store, lang)
  },

  /**
   * @method
   * @memberof transactionalMails
   * @description Returns HTML markup for partially refunded email.
   * @param {object} store - Store body object
   * @param {object} customer - Customer body object
   * @param {object} order - Order body object
   * @param {string} [lang='en_us'] - Snake case language code, eg.: 'en_us', 'pt_br'
   * @returns {Promise}
   *
   * @example

transactionalMails.partiallyRefunded(store, customer, order, 'pt_br')
  .then(html => sendEmail(html, options))
  .catch(err => console.error(err))

   */

  partiallyRefunded (store, customer, order, lang, custom_message) {
    const data = { store, customer, order, custom_message }
    return render('partially_refunded', data, store, lang)
  },

  /**
   * @method
   * @memberof transactionalMails
   * @description Returns HTML markup for refunded order email.
   * @param {object} store - Store body object
   * @param {object} customer - Customer body object
   * @param {object} order - Order body object
   * @param {string} [lang='en_us'] - Snake case language code, eg.: 'en_us', 'pt_br'
   * @returns {Promise}
   *
   * @example

transactionalMails.refunded(store, customer, order, 'pt_br')
  .then(html => sendEmail(html, options))
  .catch(err => console.error(err))

   */

  refunded (store, customer, order, lang, custom_message) {
    const data = { store, customer, order, custom_message }
    return render('refunded', data, store, lang)
  },

  /**
   * @method
   * @memberof transactionalMails
   * @description Returns HTML markup for order invoice issued email.
   * @param {object} store - Store body object
   * @param {object} customer - Customer body object
   * @param {object} order - Order body object
   * @param {string} [lang='en_us'] - Snake case language code, eg.: 'en_us', 'pt_br'
   * @returns {Promise}
   *
   * @example

transactionalMails.invoiceIssued(store, customer, order, 'pt_br')
  .then(html => sendEmail(html, options))
  .catch(err => console.error(err))

   */

  invoiceIssued (store, customer, order, lang, custom_message) {
    const data = { store, customer, order, custom_message}
    return render('invoice_issued', data, store, lang)
  },

  /**
   * @method
   * @memberof transactionalMails
   * @description Returns HTML markup for order in production email.
   * @param {object} store - Store body object
   * @param {object} customer - Customer body object
   * @param {object} order - Order body object
   * @param {string} [lang='en_us'] - Snake case language code, eg.: 'en_us', 'pt_br'
   * @returns {Promise}
   *
   * @example

transactionalMails.inProduction(store, customer, order, 'pt_br')
  .then(html => sendEmail(html, options))
  .catch(err => console.error(err))

   */

  inProduction (store, customer, order, lang, custom_message) {
    const data = { store, customer, order, custom_message }
    return render('in_production', data, store, lang)
  },

  /**
   * @method
   * @memberof transactionalMails
   * @description Returns HTML markup for order in separation email.
   * @param {object} store - Store body object
   * @param {object} customer - Customer body object
   * @param {object} order - Order body object
   * @param {string} [lang='en_us'] - Snake case language code, eg.: 'en_us', 'pt_br'
   * @returns {Promise}
   *
   * @example

transactionalMails.inSeparation(store, customer, order, 'pt_br')
  .then(html => sendEmail(html, options))
  .catch(err => console.error(err))

   */

  inSeparation (store, customer, order, lang, custom_message) {
    const data = { store, customer, order, custom_message }
    return render('in_separation', data, store, lang)
  },

  /**
   * @method
   * @memberof transactionalMails
   * @description Returns HTML markup for order ready for shipping email.
   * @param {object} store - Store body object
   * @param {object} customer - Customer body object
   * @param {object} order - Order body object
   * @param {string} [lang='en_us'] - Snake case language code, eg.: 'en_us', 'pt_br'
   * @returns {Promise}
   *
   * @example

transactionalMails.readyForShipping(store, customer, order, 'pt_br')
  .then(html => sendEmail(html, options))
  .catch(err => console.error(err))

   */

  readyForShipping (store, customer, order, lang, custom_message) {
    const data = { store, customer, order, custom_message }
    return render('ready_for_shipping', data, store, lang)
  },

  /**
   * @method
   * @memberof transactionalMails
   * @description Returns HTML markup for partially shipped order email.
   * @param {object} store - Store body object
   * @param {object} customer - Customer body object
   * @param {object} order - Order body object
   * @param {string} [lang='en_us'] - Snake case language code, eg.: 'en_us', 'pt_br'
   * @returns {Promise}
   *
   * @example

transactionalMails.partiallyShipped(store, customer, order, 'pt_br')
  .then(html => sendEmail(html, options))
  .catch(err => console.error(err))

   */

  partiallyShipped (store, customer, order, lang, custom_message) {
    const data = { store, customer, order, custom_message }
    return render('partially_shipped', data, store, lang)
  },

  /**
   * @method
   * @memberof transactionalMails
   * @description Returns HTML markup for partially delivered order email.
   * @param {object} store - Store body object
   * @param {object} customer - Customer body object
   * @param {object} order - Order body object
   * @param {string} [lang='en_us'] - Snake case language code, eg.: 'en_us', 'pt_br'
   * @returns {Promise}
   *
   * @example

transactionalMails.partiallyDelivered(store, customer, order, 'pt_br')
  .then(html => sendEmail(html, options))
  .catch(err => console.error(err))

   */

  partiallyDelivered (store, customer, order, lang, custom_message) {
    const data = { store, customer, order, custom_message }
    return render('partially_delivered', data, store, lang)
  },

  /**
   * @method
   * @memberof transactionalMails
   * @description Returns HTML markup for order returned for exchange email.
   * @param {object} store - Store body object
   * @param {object} customer - Customer body object
   * @param {object} order - Order body object
   * @param {string} [lang='en_us'] - Snake case language code, eg.: 'en_us', 'pt_br'
   * @returns {Promise}
   *
   * @example

transactionalMails.returnedForExchange(store, customer, order, 'pt_br')
  .then(html => sendEmail(html, options))
  .catch(err => console.error(err))

   */

  returnedForExchange (store, customer, order, lang, custom_message) {
    const data = { store, customer, order, custom_message }
    return render('returned_for_exchange', data, store, lang)
  },

  /**
   * @method
   * @memberof transactionalMails
   * @description Returns HTML markup for order received for exchange email.
   * @param {object} store - Store body object
   * @param {object} customer - Customer body object
   * @param {object} order - Order body object
   * @param {string} [lang='en_us'] - Snake case language code, eg.: 'en_us', 'pt_br'
   * @returns {Promise}
   *
   * @example

transactionalMails.receivedForExchange(store, customer, order, 'pt_br')
  .then(html => sendEmail(html, options))
  .catch(err => console.error(err))

   */

  receivedForExchange (store, customer, order, lang, custom_message) {
    const data = { store, customer, order, custom_message }
    return render('received_for_exchange', data, store, lang)
  },

  /**
   * @method
   * @memberof transactionalMails
   * @description Returns HTML markup for returned order email.
   * @param {object} store - Store body object
   * @param {object} customer - Customer body object
   * @param {object} order - Order body object
   * @param {string} [lang='en_us'] - Snake case language code, eg.: 'en_us', 'pt_br'
   * @returns {Promise}
   *
   * @example

transactionalMails.returned(store, customer, order, 'pt_br')
  .then(html => sendEmail(html, options))
  .catch(err => console.error(err))

   */

  returned (store, customer, order, lang, custom_message) {
    const data = { store, customer, order, custom_message }
    return render('returned', data, store, lang)
  },

  /**
   * @method
   * @memberof transactionalMails
   * @description Returns HTML markup for authorized payment email.
   * @param {object} store - Store body object
   * @param {object} customer - Customer body object
   * @param {object} order - Order body object
   * @param {string} [lang='en_us'] - Snake case language code, eg.: 'en_us', 'pt_br'
   * @returns {Promise}
   *
   * @example

  transactionalMails.authorized(store, customer, order, 'pt_br')
    .then(html => sendEmail(html, options))
    .catch(err => console.error(err))

     */

  authorized (store, customer, order, lang, custom_message) {
    const data = { store, customer, order, custom_message }
    return render('authorized', data, store, lang)
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

  transactionalMails.authorized(store, customer, order, 'pt_br')
    .then(html => sendEmail(html, options))
    .catch(err => console.error(err))

     */

  new_order (store, customer, order, lang, custom_message) {
    const data = { store, customer, order, custom_message }
    return render('new_order', data, store, lang)
  }
}

/**
 * @namespace transactionalMails
 */
