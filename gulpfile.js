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
const sourcemaps = require("gulp-sourcemaps");
// gulp-sourcemaps 生成sourcemaps

const b = browserify({
  entries: "./src/index.js",
  debug: true,   // debug: true 告知browserify在运行时同时生成sourcemap用于调试
  transform: ["babelify"]
})

const bundle = function(){
  b.bundle()
    .pipe(source("bundle.js"))
    .pipe(buffer())
    .pipe(sourcemaps.init({loadMaps: true}))
    .pipe(uglify())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest("./dist"));
};

// 打包js
const build = (done)=>{
  bundle();
  done();
};

// 实时打包js
const build_watching = (done)=>{
  bundle();
  b.plugin(watchify)
  b.on("update", function(ids){
    ids.forEach(function(v){
      console.log(v);
    })
    bundle();
  });
};


gulp.task("build", build);
gulp.task("default", build_watching);
