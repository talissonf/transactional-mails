/**
 * https://github.com/ecomclub/transactional-mails
 * @author E-Com Club <ti@e-com.club>
 * @license MIT
 */

'use strict'

// template render function
const render = require('./lib/render')

const welcome = function () {
  return render.apply(this, [ 'welcome', ...arguments ])
}

module.exports = {
  welcome
}
