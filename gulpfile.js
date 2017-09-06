var gulp = require('gulp'),
    pump = require('pump'),
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

    .task('test', function() {
        return gulp.src('./test/index.html')
            .pipe(qunit());
    });