var gulp = require('gulp'),
    pump = require('pump'),
    autoprefixer = require('gulp-autoprefixer'),
    sass = require('gulp-sass'),
    uglify = require('gulp-uglify'),
    qunit = require('gulp-qunit');

gulp
    .task('default', function () {
        console.log('Test default Gulp!');
    })

    .task('compress', function (cb) {
        pump([
                gulp.src('src/*.js'),
                uglify(),
                gulp.dest('dist')
            ],
            cb
        );
    })

    .task('css-prefix', function (cb) {
        gulp.src('src/selectbox.css')
            .pipe(autoprefixer({
                browsers: ['last 2 versions'],
                cascade: false
            }))
            .pipe(gulp.dest('dist'));
    })

    .task('sass', function () {
        return gulp.src('./src/selectbox.scss')
            .pipe(sass().on('error', sass.logError))
            .pipe(gulp.dest('./dist/css'));
    })

    .task('sass:watch', function () {
        gulp.watch('./src/selectbox.scss', ['sass']);
    })

    .task('test', function() {
        return gulp.src('./test/index.html')
            .pipe(qunit());
    });