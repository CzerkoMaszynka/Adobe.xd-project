const gulp = require("gulp");
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const autoprefixer = require('gulp-autoprefixer');
const browserSync = require('browser-sync').create();


sass.compiler = require('node-sass');


//stara składnia wyglądala następująco:
// gulp.task('sass', function () {
//     return gulp.src('./sass/**/*.scss')
//       .pipe(sass().on('error', sass.logError))
//       .pipe(gulp.dest('./css'));
//   });


const server = function(cb) {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
    cb();
}

//teraz używa się raczej w ten sposób:
const css = function() {
       return gulp.src('./scss/main.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({
            outputStyle : "nested"
        }).on('error', sass.logError))
        .pipe(autoprefixer())
        .pipe(sourcemaps.write("."))
        .pipe(gulp.dest('./css'))
        .pipe(browserSync.stream());
}

const watch = function(cb) {
    gulp.watch("./scss/**/*.scss", gulp.series(css));
    gulp.watch("./*.html").on('change', browserSync.reload);
    cb();
}

exports.css = css;
exports.watch = watch;
exports.default = gulp.series(css, server, watch);