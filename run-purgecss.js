const exec = require('child_process').exec;

/**
 * or you can refer to https://dev.to/dylanvdmerwe/reduce-angular-style-size-using-purgecss-to-remove-unused-styles-3b2k
 * for full comparision script to show before and after results
 * */

console.log('Run PurgeCSS...');

exec(
  'purgecss --config ./purgecss.config.js',
  function (error, stdout, stderr) {
    console.log('PurgeCSS completed Yay');
  }
);