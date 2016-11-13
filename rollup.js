import rollup      from 'rollup';
import nodeResolve from 'rollup-plugin-node-resolve';
import commonjs    from 'rollup-plugin-commonjs';
import uglify      from 'rollup-plugin-uglify';
import { minify }  from 'uglify-js';

export default {
  entry: 'app/main-aot.js',
  dest: 'dist/rune.js',
  sourceMap: false,
  format: 'iife',
  plugins: [
    nodeResolve({ jsnext: true, module: true }),
    commonjs({
      include: [
        'node_modules/rxjs/**',
        'node_modules/ramda/**',
        'node_modules/eventemitter3/**'
      ],
      namedExports: {
        'node_modules/eventemitter3/index.js': [ 'EventEmitter' ],
        'node_modules/ramda/dist/ramda.js': [ 'sort', 'find', 'concat', 'map', 'sortBy', 'prop', 'propEq', 'range' ]
      }
    }),
    uglify({ }, minify)
  ]
}
