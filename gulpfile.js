'use strict';

const gulp = require('gulp');
const concat = require('gulp-concat');
const sass = require('gulp-sass')(require('sass'));
const del = require('del');
const cleanCSS = require('gulp-clean-css');

gulp.task('clean', () => {
  return del(['./dist/styles/'], {force: true});
});

gulp.task('compose-css', () => {
  return gulp.src(`./src/ngx-image-file-input.component.scss`)
    .pipe(sass().on('error', sass.logError))
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(concat('theme.css'))
    .pipe(gulp.dest('./dist/styles'));
});

gulp.task('default', gulp.series(['clean', 'compose-css']));
