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
// gulp-sourcemaps 生成sourcemaps
const glob = require("glob");
// 获取符合规则的文件

const b = function(filename){
  let b = browserify({
    entries: filename,
    debug: true,
    transform: ["babelify"]
  });
  return b;
};

const bundleStream = function(filename){
  var bundleStream = through();
  // gulp希望任务能够返回一个stream，因此在这里创建以恶搞
   bundleStream
   .pipe(source(filename.replace("./src/", "")))
   .pipe(buffer())
   .pipe(sourcemaps.init())
   .pipe(uglify())
   .pipe(sourcemaps.write())
   .pipe(gulp.dest("./dist"))
   return bundleStream;
};

// 打包
const build = (done)=>{
  glob("./src/*.js", function(err, files){
     files.forEach(filename=>{
        let _b = b(filename);
        _b.bundle().pipe(bundleStream(filename));
     });
  })
  done();
};

// 打包并监测文件变化
const build_watching = (done)=>{
  glob("./src/*.js", function(err, files){
     files.forEach(filename=>{
        let _b = b(filename);
        _b.plugin(watchify).bundle().pipe(bundleStream(filename));
        _b.on("update", function(){
          _b.bundle().pipe(bundleStream(filename))
        });
     });
  })
  done();
};


gulp.task("build", build);
gulp.task("default", build_watching);
