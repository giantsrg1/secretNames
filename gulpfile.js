var gulp = require('gulp');
var sass = require('gulp-sass');
let cleanCSS = require('gulp-clean-css');
var rename = require('gulp-rename');
var uglify = require('gulp-uglifyes');

gulp.task('sass', function() {
    return gulp.src('./public/views/main.scss')
        .pipe(sass()) // Using gulp-sass
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest('./public/dist'));
});

gulp.task('js', function() {
    return gulp.src('./public/views/main.js')
        .pipe(uglify())
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest('./public/dist'));
});

gulp.task('default', ['sass', 'js'], function() {});