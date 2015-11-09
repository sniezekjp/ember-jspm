var gulp = require('gulp');
var compiler = require('gulp-ember-template-compiler');
var rename = require('gulp-rename');
var babel = require('gulp-babel');

gulp.task('watch', function() {
	gulp.watch(['app/**/*.hbs'], ['templates'])
});

gulp.task('templates', function() {
    gulp.src(['app/**/*.hbs'])
    .pipe(compiler())
    .pipe(babel({
        plugins: ['transform-es2015-modules-systemjs']
    }))
    .pipe(rename(function(path) {
        path.extname = '.js'
    }))
    .pipe(gulp.dest('./app'));
});

gulp.task('default', ['templates','watch'])