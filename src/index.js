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
   * @param {object} customer - Customer body object
   * @param {string} [lang='en_us'] - Snake case language code, eg.: 'en_us', 'pt_br'
   * @param {string} [themeColor] - RGB color string
   * @returns {Promise}
   */

  welcome (customer, lang, themeColor) {
    const data = { customer }
    return render('welcome', data, lang, themeColor)
  }

}

/**
 * @namespace transactionalMails
 */
