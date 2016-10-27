var gulp = require('gulp'),
  sass = require('gulp-sass'),
  browserSync = require('browser-sync').create(),
  pug = require('gulp-pug'),
  plumber = require('gulp-plumber'),
  watch = require('gulp-watch'),
  uglify = require('gulp-uglify'),
  cssnano = require('gulp-cssnano'),
  imagemin = require('gulp-imagemin'),
  sassLint = require('gulp-sass-lint'),
  pugLinter = require('gulp-pug-linter'),
  jshint = require('gulp-jshint'),
  src = './';

gulp.task('sass-lint', function () {
  return gulp.src('app/styles/**/*.sass')
    .pipe(sassLint())
    .pipe(sassLint.format())
    .pipe(sassLint.failOnError());
});

gulp.task('pug-lint', function () {
  return gulp
    .src('./app/templates/**/*.pug')
    .pipe(pugLinter())
    .pipe(pugLinter.reporter());
});

gulp.task('js-lint', function() {
  return gulp.src('./dist/scripts/**/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});


gulp.task('styles', function(){
  gulp.src('./app/styles/main.sass')
    .pipe(plumber())
    .pipe(sass())
    .pipe(gulp.dest(src + 'app/dist/css'))
    .pipe(browserSync.reload({stream: true}));
});

gulp.task('views', function buildHTML() {
  return gulp.src(src + 'app/templates/**.pug')
  .pipe(plumber())
  .pipe(pug({
    pretty: true
  }))
  .pipe(gulp.dest(src + 'app/dist'))
  .pipe(browserSync.reload({stream: true}));
});

gulp.task('js-watch', function(){
  gulp.src(src + 'app/dist/scripts/*.js')
    .pipe(browserSync.reload({stream: true}));
});


gulp.task('serve', function() {
  browserSync.init({
    server: {
      baseDir: src + 'app/dist',
      serveStaticOptions: {
        extensions: ['html']
      }
    }
  });
  gulp.watch('app/styles/**/*.{sass, scss}', {cwd: src}, ['styles']);
  gulp.watch('app/templates/**/*.pug', {cwd: src}, ['views']);
  gulp.watch('app/dist/scripts/*.js', {cwd: src}, ['js-watch']);
  gulp.watch('app/dist/*.html').on('change', browserSync.reload);
});

gulp.task('image-min', function(){
  gulp.src(src + 'app/dist/img/*')
    .pipe(imagemin())
    .pipe(gulp.dest(src + 'app/dist/img'));
});

gulp.task('js-min', function(){
  gulp.src(src + 'app/dist/scripts/*.js')
    .pipe(uglify())
    .pipe(gulp.dest(src + 'app/dist/scripts'));
});

gulp.task('css-min', function(){
  gulp.src(src + 'app/dist/css/*.css')
    .pipe(cssnano())
    .pipe(gulp.dest(src + 'app/dist/css'));
});

gulp.task('default', ['styles', 'sass-lint', 'views', 'pug-lint', 'js-watch', 'js-lint', 'serve']);

gulp.task('build', ['image-min', 'js-min', 'css-min']);
