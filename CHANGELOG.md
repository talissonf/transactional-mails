# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

## [0.4.0](https://github.com/ecomclub/transactional-mails/compare/v0.3.0...v0.4.0) (2019-07-17)


### Bug Fixes

* renaming methods to camelCase ([8494850](https://github.com/ecomclub/transactional-mails/commit/8494850))
* **abandoned-cart:** adding element classes to 'abandoned-cart' template ([55d6108](https://github.com/ecomclub/transactional-mails/commit/55d6108))
* **delivered:** adding element classes to 'delivered' template ([ae4dcbb](https://github.com/ecomclub/transactional-mails/commit/ae4dcbb))
* **new-order:** adding element classes to 'new-order' template ([ca7371b](https://github.com/ecomclub/transactional-mails/commit/ca7371b))
* **payment:** adding element classes to 'payment' template ([d5fa7fa](https://github.com/ecomclub/transactional-mails/commit/d5fa7fa))
* **render:** handle 'includePaths' node-sass option ([ec207df](https://github.com/ecomclub/transactional-mails/commit/ec207df))
* **render:** using only one 'styles.scss' file ([6448cd1](https://github.com/ecomclub/transactional-mails/commit/6448cd1))
* **scss:** fix styles, some hardcodes with 'important' ([2b4487c](https://github.com/ecomclub/transactional-mails/commit/2b4487c))
* **shipped:** adding 'btn' and 'main' classes to respective elements ([e9a1ce7](https://github.com/ecomclub/transactional-mails/commit/e9a1ce7))
* **welcome:** inline style fixes on 'welcome' template ([d6aca60](https://github.com/ecomclub/transactional-mails/commit/d6aca60))


### Tests

* **server:** fix server script ([7a28dde](https://github.com/ecomclub/transactional-mails/commit/7a28dde))


### BREAKING CHANGES

* some old methods not workign (renamed)



## [0.3.0](https://github.com/ecomclub/transactional-mails/compare/v0.2.0...v0.3.0) (2019-07-08)


### Bug Fixes

* **welcome:** fix 'welcome' method params ([872e123](https://github.com/ecomclub/transactional-mails/commit/872e123))


### Features

* **render:** complete template params with 'themeColor' and 'ecomUtils' ([0996181](https://github.com/ecomclub/transactional-mails/commit/0996181))


### Tests

* **server:** handle route by route, load sample json data ([bb0f319](https://github.com/ecomclub/transactional-mails/commit/bb0f319))
* **view:** testing 'ecomUtils' on welcome EJS view ([f669d64](https://github.com/ecomclub/transactional-mails/commit/f669d64))
* **view:** testing json data on EJS view ([a9a1816](https://github.com/ecomclub/transactional-mails/commit/a9a1816))



## [0.2.0](https://github.com/ecomclub/transactional-mails/compare/v0.1.0...v0.2.0) (2019-07-08)


### Features

* **methods:** exporting lib, each template will be a method ([4f7b5bb](https://github.com/ecomclub/transactional-mails/commit/4f7b5bb))


### Tests

* **home:** change example linked template (welcome) ([8b2c154](https://github.com/ecomclub/transactional-mails/commit/8b2c154))
* **home:** single description of how to use dev server ([7139639](https://github.com/ecomclub/transactional-mails/commit/7139639))
* **server:** fix importing render function ([1a47f44](https://github.com/ecomclub/transactional-mails/commit/1a47f44))
* **server:** fix server middleware ([e5ff728](https://github.com/ecomclub/transactional-mails/commit/e5ff728))



## 0.1.0 (2019-07-08)


### Bug Fixes

* **render:** compile Sass to CSS properly ([bd03db9](https://github.com/ecomclub/transactional-mails/commit/bd03db9))
* **template:** fixes for default template view and scss ([3474d68](https://github.com/ecomclub/transactional-mails/commit/3474d68))


### Features

* **render:** receive data object on render function ([03d9369](https://github.com/ecomclub/transactional-mails/commit/03d9369))
* **render:** rendering email template with EJS and Sass ([521463b](https://github.com/ecomclub/transactional-mails/commit/521463b))


### Tests

* setup dev server with browser sync ([ab702cf](https://github.com/ecomclub/transactional-mails/commit/ab702cf))
