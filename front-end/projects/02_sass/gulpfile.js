// Sass configuration
var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('default', function() {
    gulp.src('sass/*.scss')
        .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
        .pipe(autoprefixer())        
        .pipe(gulp.dest('css'));
});

// gulp.task('default', ['sass'], function() {
//     gulp.watch('sass/*.scss', ['sass']);
// });