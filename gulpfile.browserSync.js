const gulp = require("gulp");
const browserSync = require("browser-sync").create();
const source = require("vinyl-source-stream");
const buffer = require("vinyl-buffer");
const browserify = require("browserify");
const watchify = require("watchify");
const gulpIf = require("gulp-if");
const less = require("gulp-less");
const uglify = require("gulp-uglify");
const sourcemaps = require("gulp-sourcemaps");
const NODE_ENV = process.env.NODE_ENV || "development"; // 生产环境
const reload = browserSync.reload;

gulp.task("build", function(done){
  var b = browserify({
    entries: "./src/index.js",
    debug: true,
    transform: [["babelify", {
      "presets": ["@babel/env"]
    }]],
    plugin: [NODE_ENV === "development" && watchify]
  })
  function bundle(){
    b.bundle()
    .pipe(source("index.js"))
    .pipe(buffer())
    .pipe(sourcemaps.init())
    .pipe(gulpIf(NODE_ENV === "production", uglify()))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest("./dist"))
    .pipe(reload({stream: true}))
  }
  bundle();

  b.on("update", function(){
    bundle();
  });

  done();
});

gulp.task("less", function(done){
  gulp.src("./src/css/**/*.less")
  .pipe(less())
  //.pipe(gulpIf(NODE_ENV === "production", cleanCss()))
  .pipe(gulp.dest("dist/css"))
  .pipe(reload({stream: true}));
  done();
});

gulp.task("serve", function(done){
  browserSync.init({
    browser: "google chrome",
    server: "./"
  });
  gulp.watch("./src/css/**/*.less", gulp.series("less"));
  done();
});

gulp.task("prod", gulp.parallel("less", "build"))
gulp.task("default", gulp.parallel("less", "serve", "build"));
