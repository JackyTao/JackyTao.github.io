
var gulp = require('gulp');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var gutil = require('gulp-util');
var sourcemaps = require('gulp-sourcemaps');
var babelify = require('babelify');

// depracated
//var reactify = require('reactify');

gulp.task('browser', function () {
    // set up the browserify instance on a task basis
    var b = browserify({
        entries: './js/site.js',
        debug: true,
    // defining transforms here will avoid crashing your stream
        transform: [reactify]
    });

    return browserify('./js/site.js')
        .bundle()
        .pipe(source('app.js'))
        .pipe(buffer())
        .pipe(gulp.dest('./js/site-react.js'));
    });

gulp.task('old', function(){
    gulp.src('./js/*.coffee')
    .pipe(coffee())
    .pipe(gulp.dest('./js/'))
})

var gulp = require('gulp');
var browserify = require('browserify');
var transform = require('vinyl-transform');
var uglify = require('gulp-uglify');

gulp.task('default-error', function () {
    var browserified = function(filename) {
        var b = browserify(filename).transform(babelify);
        return b.bundle().pipe(source()).pipe(buffer());
    };

    //return gulp.src(['./js/src/*.jsx'])
    return gulp.src(['./js/src/site.jsx'])
        .pipe(browserified)
        //.pipe(uglify())
        //.pipe(gulp.dest('./js/site-react.js'));
        .pipe(gulp.dest('.'));
});

gulp.task('default', function () {
    var b = browserify({
        entries: ['./js/src/site.jsx'],
    });

    return browserify('./js/src/site.jsx') 
        .transform(babelify, {presets: ["react"]})
        .bundle()
        .pipe(source('site-react.js'))
        .pipe(buffer())
        .pipe(gulp.dest('./js/'));
});
