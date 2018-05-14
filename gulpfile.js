var gulp = require('gulp');
var sass = require('gulp-sass');
var jade = require('gulp-jade');






gulp.task('sass', function() {
  return gulp.src('./scss/styles.scss')
    .pipe(sass())
    .pipe(gulp.dest('./site/assets/css'))
});


gulp.task('jade', function() {
  var YOUR_LOCALS = {};

  gulp.src('./jade-files/*.jade')
    .pipe(jade({
      locals: YOUR_LOCALS
    }))
    .pipe(gulp.dest('./site'))
});


gulp.task('default', ['sass', 'jade'])
