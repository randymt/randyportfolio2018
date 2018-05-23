var gulp        = require('gulp');
var sass        = require('gulp-sass');
var jade        = require('gulp-jade');
var browserSync = require('browser-sync');







gulp.task('sass', function() {
  return gulp.src('./sass/styles.scss')
    .pipe(sass())
    .pipe(gulp.dest('./site/assets/css'))
    .pipe(browserSync.stream());
});


gulp.task('jade', function() {
  var YOUR_LOCALS = {};

  gulp.src('./jade-files/*.jade')
    .pipe(jade({
      locals: YOUR_LOCALS
    }))
    .pipe(gulp.dest('./site'))
});


gulp.task('serve', ['sass'], function() {

    browserSync.init({
      server: './site'
    });

    gulp.watch('./sass/*.scss', ['sass']);
    gulp.watch('./sass/sections/*.scss', ['sass']);

    gulp.watch('./jade-files/*.jade', ['jade']).on('change', browserSync.reload);
});




gulp.task('default', ['serve']);
