gulp-file-hash
===========

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