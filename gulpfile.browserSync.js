const gulp = require("gulp");
const browserSync = require("browser-sync").create();
const source = require("vinyl-source-stream");
const buffer = require("vinyl-buffer");
const browserify = require("browserify");
const less = require("gulp-less");
const reload = browserSync.reload;

gulp.task("bundle", function(){
  var b = browserify({
    entries: "./src/index.js",
    debug: true,
    transform: [["babelify", {
      "presets": ["@babel/env"]
    }]],
    plugin: ["watchify"]
  })

  function bundle(){
    b.bundle()
    .pipe(source("index.js"))
    .pipe(buffer())
    .pipe(gulp.dest("./dist"))
    .pipe(reload({stream: true}));
  }
  bundle();

  b.on("update", function(){
    bundle();
  });
});

gulp.task("less", function(){
  return gulp.src("./src/css/**/*.less")
  .pipe(less())
  .pipe(gulp.dest("dist/css"))
  .pipe(reload({stream: true}));
});

gulp.task("watch", function(done){
  gulp.watch("./src/css/**/*.less", gulp.series("less"));
  gulp.watch("./**/*.html").on("change", function(){
    reload();
  });
});

gulp.task("serve", function(done){
  browserSync.init({
    browser: "google chrome",
    server: "./"
  });
});


gulp.task("default", gulp.parallel(gulp.series("less", "serve"), "bundle", "watch"));
