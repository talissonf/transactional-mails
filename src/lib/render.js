'use strict'

// read source files with Node.js modules
const path = require('path')
const fs = require('fs')
// compile EJS views to HTML
// https://ejs.co/
const ejs = require('ejs')
// compile Sass to CSS
// https://github.com/sass/node-sass
const sass = require('node-sass')
// E-Com Plus utility methods
// https://developers.e-com.plus/ecomplus-utils/
const ecomUtils = require('@ecomplus/utils')

module.exports = (template, data = {}, store, lang) => {
  // try to set lang and theme color from store object
  // https://developers.e-com.plus/docs/api/#/store/stores
  lang = lang || (store.languages && store.languages[0]) || 'pt_br'
  ecomUtils._config.set('lang', lang)
  const themeColor = (store.brand_colors && store.brand_colors.primary) || '#6c757d'

  // handle default currency by lang
  if (lang === 'pt_br') {
    ecomUtils._config.set('currency', 'BRL')
    ecomUtils._config.set('currency_symbol', 'R$')
  }

  return new Promise((resolve, reject) => {
    // setup dictionary object first
    const i18n = path.join(__dirname, `../../i18n/${lang}.json`)
    fs.readFile(i18n, 'utf8', (err, contents) => {
      if (err) {
        return reject(err)
      }

      try {
        data.i18n = JSON.parse(contents)
      } catch (err) {
        // invalid JSON
        return reject(err)
      }

      // render Sass to CSS with theme color
      const scss = path.join(__dirname, `../../scss/styles.scss`)
      fs.readFile(scss, 'utf8', (err, contents) => {
        if (err) {
          return reject(err)
        }

        // merge SCSS file content with theme color variable
        const scssString = `$theme-color: ${themeColor};\n${contents}`
        // render Sass
        sass.render({
          data: scssString,
          includePaths: [ path.join(__dirname, '../../scss') ]
        }, (err, result) => {
          if (err) {
            // SCSS error
            return reject(err)
          }

          // save CSS on template data
          data.css = result.css.toString()
          // complete template params with `themeColor` and `ecomUtils`
          Object.assign(data, { themeColor, ecomUtils })

          // render EJS file to HTML
          const view = path.join(__dirname, `../../views/${template}.ejs`)
          ejs.renderFile(view, data, null, (err, html) => {
            if (err) {
              reject(err)
            } else {
              // all done
              // resolve promise with HTML string
              resolve(html)
            }
          })
        })
      })
    })
  })
}
