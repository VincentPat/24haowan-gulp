var gulp = require('gulp');
var sass = require('gulp-sass');
var rev = require('gulp-rev');
var revCollector = require('gulp-rev-collector');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var del = require('del');
var browserSync = require('browser-sync');
var cached = require('gulp-cached');
var fileinclude = require('gulp-file-include');
var autoprefixer = require('gulp-autoprefixer');

/**
 * sass
 * 编译SASS(自带压缩) 
 */
gulp.task('sass', function () {
 	return gulp.src('./css/*.scss')
	 	.pipe(cached('sass'))
	 	.pipe(autoprefixer('last 6 version'))
    	.pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    	.pipe(rev())
    	.pipe(gulp.dest('./dist/css'))
    	.pipe(rev.manifest())
        .pipe(gulp.dest('./rev/css'));
});

/**
 * script
 * 压缩js文件
 */
gulp.task('script', function() {
	return gulp.src(['js/*.js'])
		.pipe(cached('script'))
	    .pipe(uglify())
	    .pipe(rev())
	    .pipe(gulp.dest('./dist/js'))
	    .pipe(rev.manifest())
        .pipe(gulp.dest('./rev/js'));
});

/**
 * html
 * 转移html文件，合并html文件
 */
gulp.task('html', function() {
	return gulp.src('./*.html')
	    .pipe(fileinclude())
	    .pipe(gulp.dest('dist/'))
});

/**
 * rev
 * 为CSS、js引用添加文件指纹
 */
gulp.task('rev', function() {
	gulp.src(['./rev/**/*.json', './dist/**/*'])
        .pipe(revCollector())
        .pipe(gulp.dest('dist/'));
});

/**
 * clean
 * 清空dist文件夹
 */
gulp.task('clean', function() {
	return del('dist/**/*');
});

/**
 * build
 * 自动构建
 */
gulp.task('build', ['sass', 'script', 'html'], function() {
	gulp.start('rev');
});

/**
 * hot-build
 * 自动构建
 */
gulp.task('hot-build', ['build'], function() {
	browserSync.reload();
});

/**
 * default
 * 清空dist，再执行build
 */
gulp.task('default', ['clean'], function() {
	gulp.start('build');
});

/**
 * watch
 * 开启本地服务器并监听
 */
gulp.task('watch', function() {
	browserSync.init({
		server: {
			baseDir: 'dist/' // 在 dist 目录下启动本地服务器环境，自动启动默认浏览器
		}
	});

	// 监控 SASS 文件，有变动则执行CSS注入
	gulp.watch('./css/*.scss', ['hot-build']);
	// 监控 js 文件，有变动则执行 script 任务
	gulp.watch('./js/*.js', ['hot-build']);
	// 监控 html 文件，有变动则执行 html 任务
	gulp.watch('./*.html', ['hot-build']);
});