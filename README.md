# angular-material-starter-template (ng-new-app 🍄)

## Package has been updated with everything latest, if you find any issues, please report. PRs welcome

_Note: Cypress RUN and Code Coverage is disabled from pipeline until officially fixed by Cypress Team_

[![Lint-Prettier-Prettier:verify-Tests-CypressTests-Build-Purgecss-Deploy](https://github.com/sardapv/angular-material-starter-template/actions/workflows/build-deploy.yml/badge.svg)](https://github.com/sardapv/angular-material-starter-template/actions/workflows/build-deploy.yml) ![GitHub](https://img.shields.io/github/license/sardapv/ng-material-starter-template) ![GitHub release (latest by date)](https://img.shields.io/github/v/release/sardapv/angular-material-starter-template)

![logo](logoForThisRepo.png?raw=true)

> This boilerplate comes with bunch of preconfigured stuffs and best practises to help you kickstart your project easier & quicker...

If you like this project, do leave a 🌟 ! 😊

[Sample Demo 🚀](https://sardapv.github.io/angular-material-starter-template/) (only shows that Tailwind, Material components are integrated)

# How to get started?

Make sure you have node.js latest stable & @angular-cli installed on your system before running below commands

- Run

```bash
npx ng-new-app your-app-name
```

if you don't have npx, Run -

```bash
sudo npm i ng-new-app -g
```

and

```bash
ng-new-app your-app-name
```

- Read instructions carefully after its successful, refer readme if any doubt.
- change package.json for project, version & author details
- Run`npm start` and start coding 😉

# What's inside the boilerplate?

> Keep reading for detailed summary 🍷

- Project Structure inspired form [Rik De Vos&#39;s blog](https://medium.com/dev-jam/5-tips-best-practices-to-organize-your-angular-project-e900db08702e) - tl:dr 3 main modules

  - **CoreModule** - only to be imported in Appmodule

    - Auth Guard with basic check
    - Basic Auth service (Refer model in model folder & change accordingly)

      - login
      - refreshtoken
      - storetoken
      - getTokens
      - logout

    - A broadcaster service included which listens to your key:value pair of events anywhere in app. Here is how to use to share data across modules,components

      - ```ts
        constructor(private _broadcatser: BroadcasterService) {}
        ```
      - to broadcast and listen anywhere

        ```ts
        this._broadcatser.broadcast('mykey', 'myvalue');

        // to listen inside any component inject service there and do simply below

        /* use this service with takeUntil from rxJS and local Subject &
         * destroy in OnDestroy to prevent memory leaks
         */

        this._broadcatser.listen('mykey').subscribe({
            next:(data) => console.log(data) // your broadcasted value
          })
        }
        ```

  - **FeatureModule** - all lazyloaded pages/modules goes here

    - `before-login` modules
    - `after-login` modules

  - **SharedModule** - folder with bunch of SCAM (Single Component Angular Module) modules only to be shared globally and imported in feature modules

    - Can have custom`components, pipes, directives` as SCAM pattern (sample scam component as independent module included: recommended rather than creating big shared module)
    - Custom`Pipes, Directives, Components, Models, Validators` folders to organise
    - index.ts provided for shared.module.ts (to organise imports only for items to include in`shared.module.ts`)

  - annotations `@shared`, `@feature`, `@core` added in `tsconfig.json` for easy import

- HTTP Request Interceptor 👀️

  - in service.ts use endpoints without baseurl as e.g '/action/endpoint'
  - request cloner
  - header modifier
  - success and error handler
  - refresh token handler (inspired from [Rich Franzmeier&#39;s blog](https://www.intertech.com/author/rich-franzmeier/ 'Posts by Rich Franzmeier'))

- Tailwind and post-build PurgeCSS Configuration

  - Tailwind configuration with font, theme and other properties (refer`tailwind.config.js`)
  - Note: Tailwind's own purgecss only takes care of tailwind classes, for overall application, post-build purgecss is best (I will write an article explaining why)

- Angular Material Component & CDK integrated

  - Material theme starter pack included, just change colors,font inside`_mat_*.scss` files

- Superpowerd with `Jest` for unit testing and `Cypress` for e2e testing (instead of karma and protractor). Special Thanks to contribution by [@sjetha](https://github.com/sjetha) for this and eslint integration.
- ESLint integrated as recommended by Angular
- Prettier configured (with resolved conflicts between ESLint) - no VS extension being used by team? run command to check if follows rules/ run prettier on all in one go! Thanks to [@deekshithrajbasa](https://github.com/deekshithrajbasa) for this.
- Global route-loader progressbar on top like github, using [ngx-loading-bar](https://github.com/aitboudad/ngx-loading-bar) package
- Self-XSS warning for use of console on prod build. Inspect & Check console [here](https://sardapv.github.io/angular-material-starter-template/)
- Icons and Typography (CDN links - index.html)

  - Angular Material Icons added
  - Default Poppins, OpenSans font integrated

- pollyfills (for safari) '_web-animations-js_' added for animations support inside _@Component_ decorator
- Local source analyzing tools `webpack-bundle-analyzer` and `source-map-explorer`, Local prod-build deploy and test with purgecss
- [new✨] Pre-commit husky hook, run whatever command you want before git commit. By default prettifying changed/staged files and running lint is enabled, you can comment out run tests too. Refer .husky/pre-commit file for this operations. This helps you maintian same quality across team workspaces.
- [new✨] Test-coverage report and its workflow (github action). Check index.html in generated coverage folder. Thanks to [@sapatgit](https://github.com/@sapatgit) for adding this and [@sjetha](https://github.com/@sjetha) for improvising it with best solution.

# There is a command for everything you need! 🧑🏻‍💻

| command                   | What it does?                                                        | Thanks to Plugin                                                                 |
| ------------------------- | :------------------------------------------------------------------- | :------------------------------------------------------------------------------- |
| `npm start`               | Starts the server in dev mode 🤷🏻‍♂️                                     |                                                                                  |
| `npm run lint`            | Runs ESLint on project                                               |                                                                                  |
| `npm run prettier`        | Runs prettier on entire src folder                                   |                                                                                  |
| `npm run prettier:verify` | Runs prettier-check and throws error if fails                        |                                                                                  |
| `npm run prettier:staged` | Runs prettier on only staged (changed) files                         |                                                                                  |
| `npm run final-build`     | Takes prod build and runs PurgeCSS script                            |                                                                                  |
| `npm run prod-test`       | Takes a final-build deployes on local server and give you url to run | [serve](https://www.npmjs.com/package/serve)                                     |
| `npm run purgecss`        | Run PurgeCSS job to reduced style.css size into few kbs              | [purgecss](https://www.npmjs.com/package/purgecss)                               |
| `npm run source`          | Takes a final-build and opens up source-map-explorer view            | [source-map-explorer](https://www.npmjs.com/package/source-map-explorer)         |
| `npm run webpack-analyze` | Takes a final-build and opens up webpack-bundle-analyzer view        | [webpack-bundle-analyzer](https://www.npmjs.com/package/webpack-bundle-analyzer) |
| `npm run test`            | Runs all the jests test cases                                        | [@briebug/jest-schematic](https://www.npmjs.com/package/@briebug/jest-schematic) |
| `npm run test:coverage`   | Runs all the jests test cases and generate coverage report           | [@briebug/jest-schematic](https://www.npmjs.com/package/@briebug/jest-schematic) |
| `npm run e2e`             | Opens up Cypress View to run your e2e tests in browser               | [@cypress/schematic](https://www.npmjs.com/package/@cypress/schematic)           |
| `npm run e2e:ci`          | Runs cypress tests in console (used for CI/CD)                       | [@cypress/schematic](https://www.npmjs.com/package/@cypress/schematic)           |

### Plan

Under `auth-login-page branch`, there is a sample login page designed.
Looking for contributors to build signup, forgot password pages and integration with Firebase with a minimal configuration to change for any new project. PRs welcome✌🏻. Look for project/issues tab.

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="http://pranavsarda.hashnode.dev/about"><img src="https://avatars.githubusercontent.com/u/14892874?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Pranav Sarda</b></sub></a><br /><a href="https://github.com/sardapv/angular-material-starter-template/commits?author=sardapv" title="Code">💻</a> <a href="#blog-sardapv" title="Blogposts">📝</a> <a href="https://github.com/sardapv/angular-material-starter-template/commits?author=sardapv" title="Documentation">📖</a> <a href="#example-sardapv" title="Examples">💡</a> <a href="#design-sardapv" title="Design">🎨</a></td>
    <td align="center"><a href="https://github.com/sjetha"><img src="https://avatars.githubusercontent.com/u/1066864?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Shafiq Jetha</b></sub></a><br /><a href="https://github.com/sardapv/angular-material-starter-template/commits?author=sjetha" title="Tests">⚠️</a> <a href="https://github.com/sardapv/angular-material-starter-template/commits?author=sjetha" title="Code">💻</a> <a href="#maintenance-sjetha" title="Maintenance">🚧</a></td>
    <td align="center"><a href="http://deekshithrajbasa.github.io"><img src="https://avatars.githubusercontent.com/u/37568816?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Deekshith Raj Basa</b></sub></a><br /><a href="https://github.com/sardapv/angular-material-starter-template/commits?author=DeekshithRajBasa" title="Code">💻</a> <a href="#example-DeekshithRajBasa" title="Examples">💡</a></td>
    <td align="center"><a href="https://github.com/sapatgit"><img src="https://avatars.githubusercontent.com/u/21025626?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Saptarshi Majumdar</b></sub></a><br /><a href="https://github.com/sardapv/angular-material-starter-template/commits?author=sapatgit" title="Documentation">📖</a> <a href="https://github.com/sardapv/angular-material-starter-template/commits?author=sapatgit" title="Code">💻</a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!
