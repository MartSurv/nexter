//Main
const gulp = require("gulp");

//Styles
const sass = require("gulp-sass");
const autoprefixer = require("gulp-autoprefixer");
const cleanCSS = require("gulp-clean-css");

const paths = {
  styles: {
    src: "sass/**/*.scss",
    dest: "dist/css/",
  },
  images: {
    src: "img/*",
    dest: "dist/img",
  },
};

function styles() {
  return gulp
    .src(paths.styles.src)
    .pipe(sass().on("error", sass.logError))
    .pipe(autoprefixer())
    .pipe(cleanCSS())
    .pipe(gulp.dest(paths.styles.dest));
}

function watch() {
  gulp.watch(paths.styles.src, styles);
}

exports.default = watch;
