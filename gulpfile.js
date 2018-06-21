var gulp            = require('gulp');
var sass            = require('gulp-sass');
var jade            = require('gulp-jade');
var browserSync     = require('browser-sync');
const autoprefix    = require('gulp-autoprefixer');







/*
* Getting Sassy
*/

gulp.task('sass', function() {
  return gulp.src('./sass/styles.scss')
    .pipe(sass())
    .pipe(gulp.dest('./site/assets/css'))
    .pipe(browserSync.stream());
});


/*
* Getting Jade
*/
gulp.task('jade', function() {
  var YOUR_LOCALS = {};

  gulp.src('./jade-files/*.jade')
    .pipe(jade({
      locals: YOUR_LOCALS
    }))
    .pipe(gulp.dest('./site'))
});


/*
* Autoprefixer
*/

gulp.task('autoprefix', function() {
   return gulp.src('site/assets/css')
      .pipe(prefix({
         browsers: ['last 2 versions'],
         cascade: false
      }))
      .pipe(gulp.dest('site/assets/css'))

});


/*
* Getting BrowserSync & watch
*/
gulp.task('serve', ['sass'], function() {

    browserSync.init({
      server: './site'
    });

    gulp.watch('./sass/*.scss', ['sass']);
    gulp.watch('./sass/sections/*.scss', ['sass']);

    gulp.watch('./jade-files/includes/*.jade', ['jade']).on('change', browserSync.reload);
    gulp.watch('./jade-files/*.jade', ['jade']).on('change', browserSync.reload);
});




gulp.task('default', ['serve']);
