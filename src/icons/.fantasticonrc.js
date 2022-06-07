const codepoints = require('./visionlearning-icons.json');

module.exports = {
  inputDir: './original-svg', // (required)
  outputDir: './dist', // (required)
  fontTypes: ['ttf', 'woff2', 'woff'],
  assetTypes: ['css', 'json', 'html'],
  name: 'visionlearning-icons',
  codepoints: codepoints,
  prefix: 'icon',
  selector: '.icon',
  tag: 'span',
  formatOptions: {
    json: {
      indent: 3
    }
  },
  pathOptions: {
    html: '../../dist/icons/visionlearning-icons.html',
    css: '../../dist/icons/visionlearning-icons.css',
    json: '../../dist/icons/visionlearning-icons.json',
    ttf: '../../dist/icons/visionlearning-icons.ttf',
    woff: '../../dist/icons/visionlearning-icons.woff',
    woff2: '../../dist/icons/visionlearning-icons.woff2'
  }
};