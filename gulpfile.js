
var gulp = require('gulp')
var coffee = require('gulp-coffee')

gulp.task('default', function(){
    gulp.src('./js/*.coffee')
    .pipe(coffee())
    .pipe(gulp.dest('./js/'))
})
