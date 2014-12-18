var gulp = require('gulp');
var jasmine = require('gulp-jasmine');

require('coffee-script/register');

gulp.task('test', function () {
  return gulp.src('*.spec.coffee')
    .pipe(jasmine());
});

gulp.task('default', ['test']);

gulp.watch('*.coffee', ['test']);
