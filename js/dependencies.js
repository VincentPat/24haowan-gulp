define(function (){
	var Dependencies = new Vue({
		el: ".dependencies",
		data: {
			dependencies: {
				"browser-sync": "浏览器自动刷新",
			    "del": "清空文件夹工具",
			    "gulp": "基于流的自动化构建工具",
			    "gulp-autoprefixer": "CSS自动添加前缀",
			    "gulp-cached": "文件缓存工具",
			    "gulp-file-include": "文件合并工具",
			    "gulp-rename": "重命名工具",
			    "gulp-rev": "文件指纹",
			    "gulp-rev-collector": "文件名替换",
			    "gulp-sass": "编译SASS",
			    "gulp-uglify": "JS压缩"
			}
		}
	})
});