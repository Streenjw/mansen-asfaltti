const jade = require('posthtml-jade')
const md = require('posthtml-md')
const retext = require('posthtml-retext')
const smartypants = require('retext-smartypants')
const sugarss = require('sugarss')
const postcssImport = require('postcss-import')
const cssnext = require('postcss-cssnext')
const assets = require('postcss-assets')
const fontMagician = require('postcss-font-magician')
const rucksack = require('rucksack-css')
const lost = require('lost')
const postcssMixins = require('postcss-mixins')
const es2015 = require('babel-preset-es2015')
const stage2 = require('babel-preset-stage-2')

module.exports = {
  devtool: 'source-map',
  matchers: {
    html: '**/*.jade',
    css: '**/*.sss'
  },
  posthtml: (ctx) => {
    return {
      defaults: [
        jade({ filename: ctx.resourcePath, pretty: true, foo: 'bar' }),
        md(),
        retext([smartypants])
      ]
    }
  },
  postcss: (ctx) => {
    const atImport = postcssImport({ addDependencyTo: ctx })
    return {
      plugins: [
        atImport,
        postcssMixins(),
        cssnext(),
        rucksack(),
        lost(),
        assets({
          relative: true,
          cachebuster: true,
          loadPaths: ['assets/img/', 'assets/img/*/'],
        }),
        fontMagician({
          aliases:{
            'Titillium' : 'Titillium Web',
            'hosted' : 'assets/fonts',
          }
        }),
      ],
      parser: sugarss
    }
  },
  babel: { presets: [es2015, stage2] },
  ignore: ['**/layout.jade', '**/_*', '**/.*']
}
