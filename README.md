# ng-material-starter-template

This repo is starter template with must have features/dependencies so that you don't need to write from scratch.

<img src="https://user-images.githubusercontent.com/14892874/119226913-1e386e00-bb29-11eb-8d54-d64ce453f5f6.png" width="200" height="200">

This project is generated using latest Angular CLI 12.0.0

To start with open this project and replace '**project-name**' with _your_project_name_ across all files.

# This project is starter kit with below features

- Project Structure inspired form [Rik De Vos blog](https://medium.com/dev-jam/5-tips-best-practices-to-organize-your-angular-project-e900db08702e)

  - common annotations like @shared, @feature, @core added in tsconfig.json
  - tsconfig.app.json moved inside src
  - prod configuration setup and env with baseURL field injected in app.module
  - 3 main modules (extended notes to be added soon) -
    - CoreModule - only to be imported in Appmodule
    - FeatureModule - all lazyloaded pages/modules goes here
      - beforelogin modules
      - afterlogin modules
    - SharedModule - only to be shared and imported in feature modules
      - Can have custom components as SCAM
      - Custom Pipes, Directives, Components, Models, Validators
      - index.ts provided for shared.module.ts

- Basic Auth service like (Refer model in model folder & change accordingly)

  - login
  - refreshtoken
  - storetoken
  - getTokens
  - logout

- HTTP Request Interceptor with

  - request cloner
  - header modifier
  - success and error handler
  - refresh token handler

- Tailwind and Custom Configuration

  - sample tailwind configuration with font, theme and other properties

- Angular Material Component & CDK integrated

  - Material theme starter pack included, just change colors

- Icons and Typography (CDN - index.html)

  - Angular Material Icons added
  - Default Poppins, OpenSans font integrated

- pollyfills '_web-animations-js_' added for animations support inside _@Component_ decorator
- Styles folder with subfolder added inside stylePreprocessorOption (angular.json)

- PurgeCSS post-build script (to be added soon)
- webpack-bundle-analyzer and source-map-explorer quickstart (to be added soon)
- local prod-build host and run (to be added soon)
