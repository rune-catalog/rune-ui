'use strict';

const bs = require('browser-sync').create();

bs.init({
  server: {
    baseDir: [ ".", "node_modules/rune-ui-resources/dist" ],
    index: "index.dev.html",
    middleware: [
      (req, res, next) => {
        if (/\.html$|\/[^.\/]*$/.test(req.url)) {
          req.url = '/';
        }
        next();
      }
    ]
  },
  files: [
    "./debug/**/*.js",
    "./index.dev.html",
    "./styles.css"
  ],
  watchOptions: {
    ignored: [ "node_modules", ".git" ]
  },
  logLevel: "info",
  injectChanges: true,
  ui: false,
  open: false,
  port: 3000
});
