module.exports = {
  inputDir: './lib/icons/svg', // (required)
  outputDir: '.lib/icons/dist', // (required)
  fontTypes: ['ttf', 'woff2', 'woff'],
  assetTypes: ['css', 'json', 'html'],
  name: 'visionlearning-icons',
  prefix: 'icon',
  selector: '.icon',
  tag: 'span',
  formatOptions: {
    json: {
      indent: 3
    }
  },
  pathOptions: {
    html: './lib/icons/index.html',
    css: './lib/icons/visionlearning-icons.css',
    json: './lib/icons/visionlearning-icons.json',
    ttf: './lib/icons/visionlearning-icons.ttf',
    woff: './lib/icons/visionlearning-icons.woff',
    woff2: './lib/icons/visionlearning-icons.woff2'
  }
};
