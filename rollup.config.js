import vue from 'rollup-plugin-vue' // https://rollup-plugin-vue.vuejs.org/examples.html#component-library
import postcss from 'rollup-plugin-postcss'

export default [
  // ESM build to be used with webpack/rollup.
  {
    input: 'index.js',
    output: {
      format: 'esm',
      file: 'dist/springlib.esm.js'
      // file: 'dist/springlib.esm.js'
    },
    plugins: [
      vue(),
      postcss({
        plugins: []
      })
    ]
  },
  // SSR build.
  {
    input: 'index.js',
    output: {
      format: 'cjs',
      file: 'dist/springlib.ssr.js'
    },
    plugins: [
      vue({ template: { optimizeSSR: true } }),
      postcss({
        plugins: []
      })
    ]
  },
  // Browser build.
  // {
  //   input: 'src/wrapper.js',
  //   output: {
  //     format: 'iife',
  //     file: 'dist/springlib.js'
  //   },
  //   plugins: [
  //     vue()
  //   ]
  // }
]