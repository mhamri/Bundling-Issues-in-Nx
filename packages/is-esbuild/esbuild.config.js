const { replace } = require('esbuild-plugin-replace');

module.exports = {
  plugins: [
    replace({
      __IsEsbuild__: 'esbuild',
    }),
  ],
};
