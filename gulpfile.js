var gulp = require('gulp');
var sass = require('gulp-sass');
var sassGlob = require('gulp-sass-glob');
var sourcemaps = require('gulp-sourcemaps');
var plumber = require('gulp-plumber');
var notify = require('gulp-notify');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var assets = require('postcss-assets');
var cssdeclsort = require('css-declaration-sorter');
var mqpacker = require('css-mqpacker');
var merge = require('merge-stream');

gulp.task('sass', function() {
  var musashinoDental = gulp.src('./musashino_dental/sass/**/*.scss')
  //return gulp.src('./musashino_dental/sass/**/*.scss')
    .pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))
    .pipe(sourcemaps.init())
    .pipe(sassGlob())
    .pipe(sass({outputStyle: 'expanded'}))
    .pipe(postcss([mqpacker()]))
    .pipe(postcss([cssdeclsort({order: 'smacss'})]))
    .pipe(postcss([assets({loadPaths: ['images/']})]))
    .pipe(postcss([autoprefixer()]))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./musashino_dental/css'));

    var oheroPapa = gulp.src('./ohero_papa/sass/**/*.scss')
      .pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))
      .pipe(sourcemaps.init())
      .pipe(sassGlob())
      .pipe(sass({outputStyle: 'expanded'}))
      .pipe(postcss([mqpacker()]))
      .pipe(postcss([cssdeclsort({order: 'smacss'})]))
      .pipe(postcss([assets({loadPaths: ['images/']})]))
      .pipe(postcss([autoprefixer()]))
      .pipe(sourcemaps.write())
      .pipe(gulp.dest('./ohero_papa/css'));

      var smbcc = gulp.src('./smbcc/sass/**/*.scss')
      .pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))
      .pipe(sourcemaps.init())
      .pipe(sassGlob())
      .pipe(sass({outputStyle: 'expanded'}))
      .pipe(postcss([mqpacker()]))
      .pipe(postcss([cssdeclsort({order: 'smacss'})]))
      .pipe(postcss([assets({loadPaths: ['images/']})]))
      .pipe(postcss([autoprefixer()]))
      .pipe(sourcemaps.write())
      .pipe(gulp.dest('./smbcc/css'));

      return merge(musashinoDental, oheroPapa, smbcc);
});

gulp.task('sass:watch', function() {
  gulp.watch('./musashino_dental/sass/**/*.scss', gulp.task('sass'));
  gulp.watch('./ohero_papa/sass/**/*.scss', gulp.task('sass'));
  gulp.watch('./smbcc/sass/**/*.scss', gulp.task('sass'));
});
