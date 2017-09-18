var gulp = require('gulp'),
    pump = require('pump'),

    jshint = require('gulp-jshint'),
    uglify = require('gulp-uglify'),
    qunit = require('gulp-qunit'),

    autoprefixer = require('gulp-autoprefixer'),
    sass = require('gulp-sass');

gulp
    /**
     * Default task test.
     */
    .task('default', function () {
        console.log('Test default Gulp!');
    })


    /**
     * Verify syntax all files of the path ./src/js.
     */
    .task('lint', function() {
        return gulp.src('./src/js/*.js')
            .pipe(jshint())
            .pipe(jshint.reporter("jshint-stylish"));
    })


    /**
     * Minification for files js.
     */
    .task('compress', function (cb) {
        pump([
                gulp.src('./src/*.js'),
                uglify(),
                gulp.dest('./dist')
            ],
            cb
        );
    })


    /**
     * Interpreter for sass-lang.
     */
    .task('sass', function () {
        return gulp.src('./src/selectbox.scss')
            .pipe(sass().on('error', sass.logError))
            .pipe(gulp.dest('./dist/css'));
    })


    /**
     * Observer for compilation form Sass-lang to CSS.
     */
    .task('sass:watch', function () {
        gulp.watch('./src/selectbox.scss', ['sass']);
    })


    /**
     * Task for add prefix necessary for multiples browsers.
     */
    .task('css-prefix', function (cb) {
        gulp.src('./src/scss/selectbox.scss')
            .pipe(autoprefixer({
                browsers: ['last 2 versions'],
                cascade: false
            }))
            .pipe(gulp.dest('./dist'));
    })


    /**
     * Execute all test.
     */
    .task('test', function() {
        return gulp.src('./test/index.html')
            .pipe(qunit());
    });