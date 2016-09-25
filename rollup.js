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
        'node_modules/flux-lite/**',
        'node_modules/ramda/**'
      ],
      namedExports: {
        'node_modules/flux-lite/index.js': [ 'FluxReduceStore', 'Dispatcher' ]
      }
    }),
    // uglify()
  ]
}
