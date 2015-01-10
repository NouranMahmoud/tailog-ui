# tailog - tail your logs in the browser

<!-- [![Build Status](http://img.shields.io/travis/tailog/tailog-ui/master.svg?style=flat)](http://travis-ci.org/tailog/tailog-ui)
[![Dependency Status](https://david-dm.org/tailog/tailog-ui.svg?style=flat)](https://david-dm.org/tailog/tailog-ui)
[![devDependency Status](https://david-dm.org/tailog/tailog-ui/dev-status.svg?style=flat)](https://david-dm.org/tailog/tailog-ui#info=devDependencies)
[![Tips](http://img.shields.io/gratipay/koistya.svg?style=flat)](https://gratipay.com/koistya)
[![Gitter](http://img.shields.io/badge/chat-online-brightgreen.svg?style=flat)](https://gitter.im/tailog/tailog-ui) -->


### Getting Started

```shell
$ npm install -g gulp           # Install Gulp task runner globally
$ npm install                   # Install Node.js components listed in ./package.json
```

### How to Build

```shell
$ gulp build                    # or, `gulp build --release`
```

By default, it builds in debug mode. If you need to build in release mode, add
`--release` flag.

### How to Run

```shell
$ gulp                          # or, `gulp --release`
```

### How to Deploy

```shell
$ gulp deploy                   # or, `gulp deploy --production`
```

You can deploy to different destinations by adding a corresponding flag.
For example `--production` or `--staging` etc. See the 'deploy' task in
`gulpfile.js`.


### How to Test

Run unit tests powered by [Jest](https://facebook.github.io/jest/) with the following
[npm](https://www.npmjs.org/doc/misc/npm-scripts.html) command:

```shell
$ npm test
```
