# SejarahJoang

## versi production github `https://galangsetiawan.github.io/sejarah-joang-fe/#/dashboard`

website ini dapat di akses menggunakan codespace,
cara running project angular pada codespace
1. install angular dengan versi yang sesuai pada project ->  `npm install angular/cli@versi.yang.diinginkan` -> v15.2.0
2. running programmnya menggunakan `npm run ng serve -- --host=0.0.0.0 --disable-host-check`
3. jika berhasil running nanti akan buka tab baru yg berisi halaman preview nya, jika tidak muncul cek otorisasi site nya (kl di chrome ada di bagian kanan address bar)
4. alamat preview biasanya seperti ini `https://galangsetiawan-musical-giggle-ppxwq5qqpg5h9xpg-4200.preview.app.github.dev/#/dashboard`


## deploy ci/cd github
1. build source angularnya dengan peritah berikut
 `ng build --output-path docs --base-href /sejarah-joang-fe`
 `npm run ng build --output-path docs --base-href "https://galangsetiawan.github.io/sejarah-joang-fe/"`.
nanti akan generate folder docs di folder project

2. dibagian file index.html
ubah href nya jadi
`<base href="https://galangsetiawan.github.io/sejarah-joang-fe/">`


json-server --watch db.json

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.2.0.

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
