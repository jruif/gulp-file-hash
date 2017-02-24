gulp-file-hash
===========
gulp-file-hash is a [gulp](https://github.com/wearefractal/gulp) plugin to use hash value to filter files.

[![NPM](https://nodei.co/npm/gulp-file-hash.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/gulp-file-hash/)

[![Build Status](https://travis-ci.org/jruif/gulp-file-hash.svg?branch=master)](https://travis-ci.org/jruif/gulp-file-hash)
[![NPM version](http://img.shields.io/npm/v/gulp-file-hash.svg)](https://npmjs.org/package/gulp-file-hash)
[![Downloads](http://img.shields.io/npm/dm/gulp-file-hash.svg)](https://npmjs.org/package/gulp-file-hash)
[![Support us](http://img.shields.io/gittip/jruif.svg)](https://www.gittip.com/jruif/)


通过在根目录保存一个记录文件hash的json文件，在每次上传之前对文件的hash进行比较，过滤出hash值发生改变的文件，使上传发布的文件数达到最小。

## Install
With npm do:
```bash
npm install gulp-file-hash --save-dev
```

## Example

```js
var fileHash = require('gulp-file-hash');
var rename = require('gulp-rename');

gulp.src('dist/*')
    .pipe(fileHash('upload.json'))
    .pipe(rename({suffix: "." + (+new Date())}))
    .pipe(/* upload command */)
```

## API

fileFilter('filename.json')
根目录下记录文件hash的json文件,不存在则自动创建。

## License
MIT License
