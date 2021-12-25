# Angular Progressive Web Application (PWA)


Application example built with [Angular](https://angular.io/) 13 and adding the Progressive Web Application (PWA) using the [@angular/pwa library](https://www.npmjs.com/package/@angular/pwa).

This tutorial was posted on my [blog]() in portuguese and on the [DEV Community]() in english.



[![Website](https://shields.braskam.com/v1/shields?name=website&format=rectangle&size=small&radius=5)](https://rodrigo.kamada.com.br)
[![LinkedIn](https://shields.braskam.com/v1/shields?name=linkedin&format=rectangle&size=small&radius=5)](https://www.linkedin.com/in/rodrigokamada)
[![Twitter](https://shields.braskam.com/v1/shields?name=twitter&format=rectangle&size=small&radius=5&socialAccount=rodrigokamada)](https://twitter.com/rodrigokamada)



## Prerequisites


Before you start, you need to install and configure the tools:

* [git](https://git-scm.com/)
* [Node.js and npm](https://nodejs.org/)
* [Angular CLI](https://angular.io/cli)
* IDE (e.g. [Visual Studio Code](https://code.visualstudio.com/))



## Getting started


### Create the Angular application


**1.** Let's create the application with the Angular base structure using the `@angular/cli` with the route file and the SCSS style format.

```powershell
ng new angular-pwa --routing true --style scss
CREATE angular-pwa/README.md (1056 bytes)
CREATE angular-pwa/.editorconfig (274 bytes)
CREATE angular-pwa/.gitignore (620 bytes)
CREATE angular-pwa/angular.json (3237 bytes)
CREATE angular-pwa/package.json (1075 bytes)
CREATE angular-pwa/tsconfig.json (863 bytes)
CREATE angular-pwa/.browserslistrc (600 bytes)
CREATE angular-pwa/karma.conf.js (1428 bytes)
CREATE angular-pwa/tsconfig.app.json (287 bytes)
CREATE angular-pwa/tsconfig.spec.json (333 bytes)
CREATE angular-pwa/.vscode/extensions.json (130 bytes)
CREATE angular-pwa/.vscode/launch.json (474 bytes)
CREATE angular-pwa/.vscode/tasks.json (938 bytes)
CREATE angular-pwa/src/favicon.ico (948 bytes)
CREATE angular-pwa/src/index.html (296 bytes)
CREATE angular-pwa/src/main.ts (372 bytes)
CREATE angular-pwa/src/polyfills.ts (2338 bytes)
CREATE angular-pwa/src/styles.scss (80 bytes)
CREATE angular-pwa/src/test.ts (745 bytes)
CREATE angular-pwa/src/assets/.gitkeep (0 bytes)
CREATE angular-pwa/src/environments/environment.prod.ts (51 bytes)
CREATE angular-pwa/src/environments/environment.ts (658 bytes)
CREATE angular-pwa/src/app/app-routing.module.ts (245 bytes)
CREATE angular-pwa/src/app/app.module.ts (393 bytes)
CREATE angular-pwa/src/app/app.component.scss (0 bytes)
CREATE angular-pwa/src/app/app.component.html (23364 bytes)
CREATE angular-pwa/src/app/app.component.spec.ts (1088 bytes)
CREATE angular-pwa/src/app/app.component.ts (216 bytes)
✔ Packages installed successfully.
    Successfully initialized git.
```

**2.** Install and configure the Bootstrap CSS framework. Do steps 2 and 3 of the post *[Adding the Bootstrap CSS framework to an Angular application](https://github.com/rodrigokamada/angular-bootstrap)*.



## Cloning the application

**1.** Clone the repository.

```powershell
git clone git@github.com:rodrigokamada/angular-validation.git
```

**2.** Install the dependencies.

```powershell
npm ci
```

**3.** Run the application.

```powershell
npm start
```
