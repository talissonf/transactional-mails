'use strict'

let areIntlLocalesSupported = require('intl-locales-supported')
if (typeof areIntlLocalesSupported !== 'function' && areIntlLocalesSupported.default) {
  areIntlLocalesSupported = areIntlLocalesSupported.default
}

const localesMyAppSupports = [
  'en',
  'pt-BR'
]

const loadLocales = () => {
  localesMyAppSupports.forEach(locale => {
    require(`intl/locale-data/jsonp/${locale}.js`)
  })
}

if (global.Intl) {
  // Determine if the built-in `Intl` has the locale data we need.
  if (!areIntlLocalesSupported(localesMyAppSupports)) {
    // `Intl` exists, but it doesn't have the data we need, so load the
    // polyfill and patch the constructors we need with the polyfill's.
    loadLocales()
    const IntlPolyfill = require('intl')
    Intl.NumberFormat = IntlPolyfill.NumberFormat
    Intl.DateTimeFormat = IntlPolyfill.DateTimeFormat
  }
} else {
  // No `Intl`, so use and load the polyfill.
  loadLocales()
  global.Intl = require('intl')
}
