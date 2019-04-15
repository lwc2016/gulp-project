const gulp = require("gulp");
const browserify = require("browserify");
const source = require("vinyl-source-stream");
// vinyl-source-stream 用于将browserify的bundle()输入为gulp可以的[vinyl][](一种虚拟文件的格式)流
const buffer = require("vinyl-buffer");
// vinyl-buffer用于将vinyl流转化为buffered vinyl文件(gulp-sourcemaps以及大部分gulp插件都需要这种格式)
const uglify = require("gulp-uglify");
const gulpIf = require("gulp-if");
const watchify = require("watchify");
// watchify 监测文件变化，使browserify只对变化文件的部分进行编译
const babelify = require("babelify");
const sourcemaps = require("gulp-sourcemaps");
// gulp-sourcemaps 生成sourcemaps

/*
*  开发环境： development 默认
*  生产环境： production
*/
const NODE_ENV = process.env.NODE_ENV || "development"; // development, production

// 打包js代码
gulp.task("build", function(done){
  const b = browserify({
    entries: "./src/index.js",
    debug: true,   // debug: true 告知browserify在运行时同时生成sourcemap用于调试
    transform: ["babelify"],
    plugin: [NODE_ENV === "development" && watchify]
  });
   bundle();  // 首次打包
   function bundle(){
       b
       .bundle()
       .pipe(source("bundle.js"))
       .pipe(buffer())
       .pipe(sourcemaps.init({loadMaps: true}))
       .pipe(gulpIf(NODE_ENV === "production", uglify()))
       .pipe(sourcemaps.write())
       .pipe(gulp.dest("./dist"));
   }

   // 监测更新
   b.on("update", function(ids){
      ids.forEach(function(v){
        console.log("bundle changed file: " + v);
      })
      bundle();
   });

   done();
});

gulp.task("default", gulp.series("build"));
