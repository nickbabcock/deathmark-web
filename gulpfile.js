var gulp = require('gulp');
var csso = require('gulp-csso');
var markdown = require('gulp-markdown');
var preprocess = require('gulp-preprocess');
var uglify = require('gulp-uglify');
var imagemin = require('gulp-imagemin');

gulp.task('css', function() {
    return gulp.src('./css/*.css')
        .pipe(csso())
        .pipe(gulp.dest('./bin/css'));
});

gulp.task('markdown', function() {
    return gulp.src('postmortem_content.md')
        .pipe(markdown())
        .pipe(gulp.dest('./'));
});

gulp.task('preprocess', ['markdown'], function() {
    return gulp.src(['index.html', 'postmortem.html'])
        .pipe(preprocess())
        .pipe(gulp.dest('./bin'));
});

gulp.task('compress-js', function() {
    return gulp.src('./js/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./bin/js'));
});

gulp.task('compress-img', function() {
    return gulp.src('./img/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./bin/img'));
});

gulp.task('default', [
    'css', 
    'preprocess', 
    'compress-js', 
    'compress-img'
], function() { });
