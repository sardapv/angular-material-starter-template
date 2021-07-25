const fs = require('fs');
const lighthouse = require('lighthouse');
const chromeLauncher = require('chrome-launcher');
const minimist = require('minimist');
const portArg = minimist(process.argv.slice(2));
const port = portArg | 4200;

(async () => {
  const chrome = await chromeLauncher.launch({ chromeFlags: ['--headless'] });
  const options = { logLevel: 'info', output: 'html', onlyCategories: ['performance'], port: chrome.port };
  const runnerResult = await lighthouse('http://localhost:' + port, options);

  // `.report` is the HTML report as a string
  const reportHtml = runnerResult.report;
  fs.writeFileSync('lhreport.html', reportHtml);

  // `.lhr` is the Lighthouse Result as a JS object
  console.log('Report is done for', runnerResult.lhr.finalUrl);
  console.log('Performance score was', runnerResult.lhr.categories.performance.score * 100);

  await chrome.kill();
})();
