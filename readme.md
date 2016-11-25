gulp-file-hash
===========
[![Build Status](https://travis-ci.org/jruif/gulp-file-hash.svg?branch=master)](https://travis-ci.org/jruif/gulp-file-hash)
[![NPM version](http://img.shields.io/npm/v/gulp-file-hash.svg)](https://npmjs.org/package/gulp-file-hash)
[![Downloads](http://img.shields.io/npm/dm/gulp-file-hash.svg)](https://npmjs.org/package/gulp-file-hash)
[![Support us](http://img.shields.io/gittip/jruif.svg)](https://www.gittip.com/jruif/)


通过比较文件的hash来控制文件的版本，使每次发布的文件数最小

## Install
With npm do:
```bash
npm install gulp-file-hash --save-dev
```

## Example

```js
var fileHash = require('gulp-file-hash');
gulp.src('dist/*')
    .pipe(fileHash('upload.json'))
    .pipe(/* upload command */)
```

## API

fileFilter('filename')
根目录下的一个json文件,不存在则自动创建

## License
MIT License
