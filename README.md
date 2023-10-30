# Portfolio

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.8.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## sass and styling 
to create or modify custom styling and variables you need to re generate the theme css using sass

To properly use the theme structure there are two approaches. 
1. Use the style file structure to modify a component, setting, or page content and have it precompiled using sass.
   1. make new files as required to keep changes small. and import them using the `_index.scss`.
2. import the variable file `src/styles/variables.scss` into your component style file to make use of the variables direction.
   1. NOTE: using `var(--variable-name)` will not work for custom variables as those are not generated on the sass compilation.

UI Frameworks UI should be modified on their respective scss file inside the styles folder to have the changes propagate correctly.

requirements: you need to have sass installed globally. `npm i -g sass@latest`

commands to build theme.
`sass src/styles/app.scss src/styles/app.css` or `npm run compile-sass`

## Supported devices

The SPA is designed to be responsive for both desktop and mobile.