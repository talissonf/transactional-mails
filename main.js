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

module.exports = (template = 'index', lang = 'en_us', themeColor = '#6c757d') => {
  return new Promise((resolve, reject) => {
    // setup dictionary object first
    const i18n = path.join(process.cwd(), `i18n/${lang}.json`)
    fs.readFile(i18n, 'utf8', (err, contents) => {
      let i18n
      if (err) {
        return reject(err)
      }

      try {
        i18n = JSON.parse(contents)
      } catch (err) {
        // invalid JSON
        return reject(err)
      }

      // render Sass to CSS with theme color
      const renderSass = filename => sass.renderSync({
        data: `$theme-color: ${themeColor};`,
        file: path.resolve(process.cwd(), `scss/${filename}.scss`)
      })

      // setup data and parse template to HTML
      const view = path.join(process.cwd(), `views/${template}.ejs`)
      const data = {
        i18n,
        themeColor,
        renderSass
      }

      // render EJS file
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
}
