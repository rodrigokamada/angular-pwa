# Angular Progressive Web Application (PWA)


Application example built with [Angular](https://angular.io/) 13 and adding the Progressive Web Application (PWA) using the [@angular/pwa library](https://www.npmjs.com/package/@angular/pwa).

This tutorial was posted on my [blog](https://rodrigo.kamada.com.br/blog/adicionando-o-aplicativo-web-progressivo-pwa-em-uma-aplicacao-angular) in portuguese and on the [DEV Community]() in english.



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

**3.** Add the `@angular/pwd` library to set up the Angular service worker.

```powershell
ng add @angular/pwa
ℹ Using package manager: npm
✔ Found compatible package version: @angular/pwa@13.1.2.
✔ Package information loaded.

The package @angular/pwa@13.1.2 will be installed and executed.
Would you like to proceed? Yes
✔ Package successfully installed.
CREATE ngsw-config.json (631 bytes)
CREATE src/manifest.webmanifest (1346 bytes)
CREATE src/assets/icons/icon-128x128.png (1253 bytes)
CREATE src/assets/icons/icon-144x144.png (1394 bytes)
CREATE src/assets/icons/icon-152x152.png (1427 bytes)
CREATE src/assets/icons/icon-192x192.png (1790 bytes)
CREATE src/assets/icons/icon-384x384.png (3557 bytes)
CREATE src/assets/icons/icon-512x512.png (5008 bytes)
CREATE src/assets/icons/icon-72x72.png (792 bytes)
CREATE src/assets/icons/icon-96x96.png (958 bytes)
UPDATE angular.json (3621 bytes)
UPDATE package.json (1615 bytes)
UPDATE src/app/app.module.ts (804 bytes)
UPDATE src/index.html (509 bytes)
✔ Packages installed successfully.
```

**Note:**

The files `ngsw-config.json`, `src/manifest.webmanifest` and icons were added and the files `angular.json`, `package.json`, `src/app/app.module.ts` and `src/index.html` were changed to the application.

* `ngsw-config.json`: [Service worker](https://angular.io/guide/service-worker-intro) configuration file allows you to configure cache strategy and files and other configurations.
* `src/manifest.webmanifest`: Application configuration file or [WEB app manifest](https://developer.mozilla.org/en-US/docs/Web/Manifest) file allows you to configure the name, colors, icons and other configurations.
* `angular.json`: The service worker configuration was added.
* `package.json`: The `@angular/service-worker` library was added.
* `src/app/app.module.ts`: The service worker configuration was added.
* `src/index.html`: Manifest file configuration and theme color was added.



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
