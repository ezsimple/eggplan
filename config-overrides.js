const {
  addDecoratorsLegacy,
  disableEsLint,
  override,
  fixBabelImports,
  addLessLoader
} = require('customize-cra');

module.exports = {
  webpack: override(
    disableEsLint(),
    addDecoratorsLegacy(),
    fixBabelImports('import', {
      libraryName: 'antd',
      libraryDirectory: 'es',
      style: 'css'
    }),
    addLessLoader({
      javascriptEnabled: true
    })
  )
};
