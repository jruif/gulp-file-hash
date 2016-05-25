gulp-file-hash
===========

通过比较文件的hash来控制文件的版本，使每次发布的文件数最小

示例：

```js
var fileFilter = require('gulp-file-hash');
gulp.src('src/*')
    .pipe(fileFilter('upload.json'))
    .pipe(gulp.dest('dist/'))
```