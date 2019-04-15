const gulp = require("gulp");
const browserify = require("browserify");
const source = require("vinyl-source-stream");
// vinyl-source-stream 用于将browserify的bundle()输入为gulp可以的[vinyl][](一种虚拟文件的格式)流
const buffer = require("vinyl-buffer");
// vinyl-buffer用于将vinyl流转化为buffered vinyl文件(gulp-sourcemaps以及大部分gulp插件都需要这种格式)
const uglify = require("gulp-uglify");
const watchify = require("watchify");
// watchify 监测文件变化，使browserify只对变化文件的部分进行编译
const babelify = require("babelify");
const through = require("through2");
const sourcemaps = require("gulp-sourcemaps");
const gulpIf = require("gulp-if");
// gulp-sourcemaps 生成sourcemaps
const glob = require("glob");
// 获取符合规则的文件
const NODE_ENV = process.env.NODE_ENV || "development";

// 打包js代码
gulp.task("build", function(done){
  glob("./src/*.js", function(err, files){
    files.forEach(file=>{
      let b = browserify({
        entries: file,
        debug: true,
        transform: [babelify],
        plugin: [NODE_ENV === "development" && watchify]
      });
      bundle();

      function bundle(){
        b.bundle()
         .pipe(source(file.replace("./src/", "")))
         .pipe(buffer())
         .pipe(sourcemaps.init())
         .pipe(gulpIf(NODE_ENV === "production", uglify()))
         .pipe(sourcemaps.write())
         .pipe(gulp.dest("./dist"));
      };

      b.on("update", function(ids){
        ids.forEach(v=>{
          console.log("bundle changed file: " + v);
        });
        bundle();
      })
    });
  });
  done();
});

gulp.task("default", gulp.series("build"));
