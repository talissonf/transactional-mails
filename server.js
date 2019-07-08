'use strict'

const render = require('./src/main')
// setup dev server with BrowserSync
const browserSync = require('browser-sync').create()

browserSync.init({
  server: './test',
  middleware: [
    (req, res, next) => {
      const template = req.url.replace('/', '')
      if (template && template.indexOf('.') === -1) {
        render(template)
          .then(html => res.end(html))
          .catch(err => console.error(err))
      } else {
        next()
      }
    }
  ],

  // watch template source files and reload local server
  watch: true,
  files: [ 'views/*.ejs', 'scss/*.scss', 'i18n/*.json' ]
})
