import fs from 'fs'
import flow from 'rollup-plugin-flow'
import buble from 'rollup-plugin-buble'
import uglify from 'rollup-plugin-uglify'

const env = process.env.NODE_ENV
const pkg = JSON.parse(fs.readFileSync('./package.json'))
const plugins = [flow(), buble()]
const targets = []

if (env === 'minified') {
  plugins.push(uglify())
  targets.push({
    dest: `dist/${pkg.name}.min.js`,
    format: 'umd',
    moduleName: pkg.name
  })
} else {
  targets.push({ dest: `dist/${pkg.name}.js`, format: 'cjs' })
}

export default {
  entry: 'index.js',
  useStrict: false,
  sourceMap: true,
  plugins,
  targets
}
