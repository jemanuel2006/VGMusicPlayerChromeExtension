//Load boot.ts and bootstrap application
System.config({
  paths: {
      // paths serve as alias
      'npm:': 'node_modules/'
    },
    // map tells the System loader where to look for things
    map: {
      app: '',

      // angular bundles
      '@angular/core': 'npm:@angular/core/bundles/core.umd.js',
      '@angular/common': 'npm:@angular/common/bundles/common.umd.js',
      '@angular/compiler': 'npm:@angular/compiler/bundles/compiler.umd.js',
      '@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd.js',
      '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
      '@angular/http': 'npm:@angular/http/bundles/http.umd.js',
      '@angular/router': 'npm:@angular/router/bundles/router.umd.js',
      '@angular/forms': 'npm:@angular/forms/bundles/forms.umd.js',

      // other libraries
      'rxjs': 'npm:rxjs',
      'angular-in-memory-web-api': 'npm:angular-in-memory-web-api/bundles/in-memory-web-api.umd.js',
      '@swimlane/ngx-datatable': 'npm:@swimlane/ngx-datatable/release/index.js',
      '@angular/material': 'npm:@angular/material/bundles/material.umd.js',
      '@angular/flex-layout': 'npm:@angular/flex-layout/bundles/flex-layout.umd.js',
      'hammerjs': 'npm:hammerjs/hammer.js',
    },
  packages: {
    scripts: {
      format: 'register',
      defaultExtension: 'js'
    },
    rxjs: {
      defaultExtension: 'js'
    },
    app: {
      main: './boot.js',
      defaultExtension: 'js'
    }
  }
});

System.import('scripts/boot')
  .then(null, console.error.bind(console));