import rollup      from 'rollup';
import nodeResolve from 'rollup-plugin-node-resolve';
import commonjs    from 'rollup-plugin-commonjs';
import uglify      from 'rollup-plugin-uglify';

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
        'node_modules/eventemitter3/**',
        'node_modules/es6-error/**'
      ],
      namedExports: {
        'node_modules/eventemitter3/index.js': [ 'EventEmitter' ]
      }
    }),
    uglify()
  ]
}
