const sass = require('@stencil/sass');

exports.config = {
  namespace: 'visibility-issue',
  outputTargets: [{
      type: 'dist'
    },
    {
      type: 'www',
      serviceWorker: false
    }
  ],
  plugins: [
    sass()
  ],
  globalStyle: ['src/global.scss'],
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
}
