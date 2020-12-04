const gulp = require("gulp");
const uglify = require("gulp-uglify");
const babel = require("gulp-babel");
const sourcemaps = require('gulp-sourcemaps');

gulp.task("default", () =>
  gulp
    .src("src/main.js")
    .pipe(sourcemaps.init())
    .pipe(
      babel({
        presets: ["@babel/env"],
      })
    )
    .pipe(uglify())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest("dist"))
);
