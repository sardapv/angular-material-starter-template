#! /usr/bin/env node

const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');

if (process.argv.length < 3) {
  console.log('You have to provide a name to your new angular app 🤨');
  console.log('For example :');
  console.log('    npx ng-new-app my-app');
  process.exit(1);
}

const projectName = process.argv[2];
const currentPath = process.cwd();
const projectPath = path.join(currentPath, projectName);
const git_repo = 'https://github.com/sardapv/angular-material-starter-template.git';
const features = [
  'New Version Updatee: Now Supports, Angular, Tailwind, Jest, Cypress @ Latest',
  '-------------------------------------------------------',
  'Scalable Project Structure, annotations configured, Global style.scss configured',
  'Angular Material Component, Icons, Typography & CDK integrated (just change _variables and colors)',
  'Utility first Tailwind CSS, some of the custom configuration added',
  'Jest & Cypress (No karma & Protractor)',
  'Post build PurgeCSS',
  'HTTP Interceptor with Request cloners, baseURL prefixer, session expiry handler, global req-res error handler',
  'Boilerplate auth service and auth guard with common methods',
  'Global route-loader progressbar',
  'Custom broadcaster service utlising RxJs Subject for cross modules, component communication in key:value format',
  'ESLint Integrated',
  'Prettier Configured (exclusive of ESLint with no conflicts)',
  'Husky hooks preventing git commits unless all rules passed',
  'source-map-explorer and webpack-bundle-analyzer for prod build inspection of modules, you choose',
  'Local prod-build deploy and test on server',
  'Github Actions Pipeline configured i.e prettify -> prettify:verify -> lint -> jest & cypress tests -> build -> purgecss -> deploy',
  'Prod build console warning, Bunch of custom commands, refer table in readme (https://github.com/sardapv/angular-material-starter-template#readme)',
];

try {
  fs.mkdirSync(projectPath);
} catch (err) {
  if (err.code === 'EEXIST') {
    console.log(`The file ${projectName} already exist in the current directory, please give it another name.`);
  } else {
    console.log(error);
  }
  process.exit(1);
}

async function main() {
  try {
    console.log('\x1b[32m', '--------------------------------------------------------------------', '\x1b[0m');
    console.log('\x1b[33m', 'ng-new-app 🚀: Downloading & Setting up the project structure...', '\x1b[0m');
    console.log('\x1b[32m', '--------------------------------------------------------------------', '\x1b[0m');
    execSync(`git clone --depth 1 ${git_repo} ${projectPath}`, { stdio: 'inherit' });

    console.log('step 1/4 ✅');
    process.chdir(projectPath);
    console.log('\x1b[32m', '------------------------------------------------------', '\x1b[0m');
    console.log('\x1b[33m', 'ng-new-app 🚀: Hang on, installing dependencies...', '\x1b[33m');
    console.log('\x1b[32m', '------------------------------------------------------', '\x1b[0m');

    execSync('npm install', { stdio: 'inherit' });
    console.log('step 2/4 ✅');

    console.log('\x1b[32m', '--------------------------------------------', '\x1b[0m');
    console.log('\x1b[33m', 'ng-new-app 🚀: Cleaning useless stuff...', '\x1b[33m');
    console.log('\x1b[32m', '--------------------------------------------', '\x1b[0m');

    execSync('npx rimraf ./.git');
    execSync('npx rimraf ./bin');
    execSync('npx rimraf ./logoForThisRepo.png');
    execSync('npx rimraf ./all-contributorsrc');
    execSync('npx rimraf ./README.md');
    fs.rmdirSync(path.join(projectPath, 'bin'), { recursive: true });
    console.log('step 3/4 ✅');
    console.log(
      '\x1b[32m',
      '------------------------------------------------------------------------------------------------- ',
      '\x1b[0m'
    );
    console.log(
      '\x1b[33m',
      'ng-new-app 🚀: Yay! Boilerplate setup is successful and is ready with all below features! 🎉 ',
      '\x1b[33m'
    );
    console.log(
      '\x1b[32m',
      '-------------------------------------------------------------------------------------------------',
      '\x1b[0m'
    );

    features.forEach((x, i) => console.log('\x1b[32m', `${i + 1}. ${x}`, '\x1b[33m'));
    console.log(
      '\x1b[32m',
      '-------------------------------------------------------------------------------------------------',
      '\x1b[0m'
    );

    console.log('\x1b[31m', 'Read this before you proceed', '\x1b[0m');
    console.log('\x1b[34m', `   1. cd ${projectName}`);
    console.log(`    2. search and replace 'ng-new-app' in all files with your app-name using editor ⚠️`);
    console.log(`    3. Edit package.json and change starting details like author, description, git url, etc.`);
    console.log(`    4. If API calls supported, configure baseurl in environment*.ts files (don't end with /)`);
    console.log('    5. Run npm start', '\x1b[0m');
    console.log();
    console.log('step 4/4 ⏳');
    console.log();
    console.log(
      '\x1b[32m',
      'Check Readme.md (https://github.com/sardapv/angular-material-starter-template#readme) for more information.',
      '\x1b[0m'
    );
    console.log(
      '\x1b[32m',
      '-----------------------------------------------------------------------------------------------------------',
      '\x1b[0m'
    );
    console.log();
    console.log(
      '\x1b[36m',
      `If you find any issues, want to suggest enhancements. Welcome to PRs & feedbacks✌🏻!\n Author of this project would love to have your star ⭐️ on repo if you find this helpful 😇.\n Share with your friends! Github Repo: https://github.com/sardapv/angular-material-starter-template`,
      '\x1b[0m'
    );
    console.log();
  } catch (error) {
    console.log(error);
  }
}
main();
