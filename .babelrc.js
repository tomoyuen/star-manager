const project = require('./package.json');

module.exports = {
  presets: ['env', 'react', 'stage-3'],
  plugins: [
    'babel-polyfill',
    'transform-class-properties',
    'transform-decorators-legacy',
    ['module-resolver', {
      alias: project.alias
    }]
  ]
}
