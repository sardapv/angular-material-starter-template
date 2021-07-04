# angular-material-starter-template 🍄

<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-3-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->

![GitHub Workflow Status](https://img.shields.io/github/workflow/status/sardapv/angular-material-starter-template/Lint-Tests-CypressTests-Build-Purgecss-Deploy?label=Lint-JestTests-CypressTests-Build-Purgecss-Deploy) ![GitHub](https://img.shields.io/github/license/sardapv/ng-material-starter-template) ![GitHub release (latest by date)](https://img.shields.io/github/v/release/sardapv/angular-material-starter-template)

![Angular](https://img.shields.io/badge/Angular-12.0.0-red) ![materialUI](https://img.shields.io/badge/angular--material-12.0.0-blue) ![TailwindCSS](https://img.shields.io/badge/tailwindcss-2.1.2-%2306B6D4) ![Cypress](https://img.shields.io/badge/cypress-7.5.0-%23012) ![Jest](https://img.shields.io/badge/jest-27.0.4-%2316C213) ![Angular_lint](https://img.shields.io/badge/angular--eslint-12.0.1-important) ![PurgeCSS](https://img.shields.io/badge/postbuild%20purgecss-4.0.3-blueviolet) ![SourcemapExplorer](https://img.shields.io/badge/source--map--explorer-2.5.2-ff69b4) ![WebpackBundleAnalyzer](https://img.shields.io/badge/webpack--bundle--analyzer-4.4.1-yellow)

![logo](logoForThisRepo.png?raw=true)

> This boilerplate comes with bunch of preconfigured stuffs and best practises to help you kickstart your project easier & quicker...

If you do like this project, do leave a 🌟 ! 😊

[Sample Demo 🚀](https://sardapv.github.io/angular-material-starter-template/) (only shows that Tailwind, Material components are integrated)

# How to get started?

make sure you have node and npm installed on your system before running below commands

- Clone the repo
- Open project in your faviourite editor, let's say VSCode. Search and replace`project-name` with your*actual-project-name* across all the files
- If API calls supported, configure`baseurl` in`environment*.ts` files (don't end with /)
- Run`npm install`
- Run`ng serve`

# What does it offer?

> Well, you might have noticed badges on top 😉, but keep on reading for detailed summary 🍷

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

- Tailwind and post-build PurgeCSS Configuration 😍

  - Tailwind configuration with font, theme and other properties (refer`tailwind.config.js`)
  - Note: Tailwind's own purgecss only takes care of tailwind classes, for overall application, post-build purgecss is best (I will write an article explaining why)

- Angular Material Component & CDK integrated 😎

  - Material theme starter pack included, just change colors,font inside`_mat_*.scss` files

- Superpowerd with `Jest` for unit testing and `Cypress` for e2e testing (instead of karma and protractor). Special Thanks to contribution by [@sjetha](https://github.com/sjetha) for this and eslint integration.

- ESLint integrated as recommended by Angular

- Global route-loader progressbar on top like github, thanks to [ngx-loading-bar](https://github.com/aitboudad/ngx-loading-bar)

- Self-XSS warning for use of console on prod build. Inspect & Check console [here](https://sardapv.github.io/angular-material-starter-template/)

- Icons and Typography (CDN links - index.html) 🤓

  - Angular Material Icons added
  - Default Poppins, OpenSans font integrated

- pollyfills (for safari) '_web-animations-js_' added for animations support inside _@Component_ decorator
- Local source analyzing tools `webpack-bundle-analyzer` and `source-map-explorer`, Local prod-build deploy and test with purgecss

# Custom Commands 💃

| command                   | What it does?                                                        | Thanks to Plugin                                                                       |
| ------------------------- | :------------------------------------------------------------------- | :------------------------------------------------------------------------------------- |
| `npm run start`           | Starts the server in dev mode 🤷🏻‍♂️                                     |                                                                                        |
| `npm run lint`            | Runs ESLint on project                                               |                                                                                        |
| `npm run final-build`     | Takes prod build and runs PurgeCSS script                            |                                                                                        |
| `npm run prod-test`       | Takes a final-build deployes on local server and give you url to run | [serve](https://www.npmjs.com/package/serve)                                           |
| `npm run purgecss`        | Run PurgeCSS job to reduced style.css size into few kbs              | [purgecss](https://www.npmjs.com/package/purgecss)                                     |
| `npm run source`          | Takes a final-build and opens up source-map-explorer view            | [source-map-explorer](https://www.npmjs.com/package/source-map-explorer)               |
| `npm run webpack-analyze` | Takes a final-build and opens up webpack-bundle-analyzer view        | [webpack-bundle-analyzer](https://www.npmjs.com/package/webpack-bundle-analyzer)       |
| `npm run test`            | Runs all the jests test cases                                        | [@briebug/jest-schematic](https://www.npmjs.com/package/@briebug/jest-schematic)       |
| `npm run e2e`             | Opens up Cypress View to run your e2e tests in browser               | [@briebug/cypress-schematic](https://www.npmjs.com/package/@briebug/cypress-schematic) |
| `npm run e2e:ci`          | Runs cypress tests in console (used for CI/CD)                       | [@briebug/cypress-schematic](https://www.npmjs.com/package/@briebug/cypress-schematic) |

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://github.com/sjetha"><img src="https://avatars.githubusercontent.com/u/1066864?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Shafiq Jetha</b></sub></a><br /><a href="https://github.com/sardapv/angular-material-starter-template/commits?author=sjetha" title="Tests">⚠️</a> <a href="https://github.com/sardapv/angular-material-starter-template/commits?author=sjetha" title="Code">💻</a></td>
    <td align="center"><a href="http://pranavsarda.hashnode.dev/about"><img src="https://avatars.githubusercontent.com/u/14892874?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Pranav Sarda</b></sub></a><br /><a href="https://github.com/sardapv/angular-material-starter-template/commits?author=sardapv" title="Code">💻</a> <a href="#blog-sardapv" title="Blogposts">📝</a> <a href="https://github.com/sardapv/angular-material-starter-template/commits?author=sardapv" title="Documentation">📖</a> <a href="#example-sardapv" title="Examples">💡</a> <a href="#design-sardapv" title="Design">🎨</a></td>
    <td align="center"><a href="http://deekshithrajbasa.github.io"><img src="https://avatars.githubusercontent.com/u/37568816?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Deekshith Raj Basa</b></sub></a><br /><a href="https://github.com/sardapv/angular-material-starter-template/commits?author=DeekshithRajBasa" title="Code">💻</a> <a href="#example-DeekshithRajBasa" title="Examples">💡</a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!
