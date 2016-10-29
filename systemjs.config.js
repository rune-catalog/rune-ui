(function(global) {
  System.config({
    paths: {
      'npm:': 'node_modules/'
    },

    map: {
      // App
      app: 'app',

      // Angular
      '@angular/core': 'npm:@angular/core/bundles/core.umd.js',
      '@angular/common': 'npm:@angular/common/bundles/common.umd.js',
      '@angular/compiler': 'npm:@angular/compiler/bundles/compiler.umd.js',
      '@angular/http': 'npm:@angular/http/bundles/http.umd.js',
      '@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd.js',
      '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',

      // Lib
      rxjs: 'npm:rxjs',
      'flux-lite': 'npm:flux-lite/dist/flux-lite.umd.js',
      ramda: 'npm:ramda/dist/ramda.js'
    },

    packages: {
      app: {
        main: './main.js',
        defaultExtension: 'js'
      },
      rxjs: {
        defaultExtension: 'js'
      }
    }
  });
})(this);
