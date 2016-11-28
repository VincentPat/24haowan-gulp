# 24haowan-gulp
24好玩工作流

### Description
24好玩前端工作流，主要内容是自动构建和刷新浏览器预览
### Dependencies
- browser-sync
- del
- gulp
- gulp-autoprefixer
- gulp-cached
- gulp-file-include
- gulp-notify
- gulp-rename
- gulp-rev
- gulp-rev-collector
- gulp-sass
- gulp-uglif

### Getting Started
##### Clone
```
$ git clone git@github.com:GuangZhouShanyouGame/24haowan-gulp.git
```
##### Intallation
```
$ npm install
```
### Usage
##### Build Your Project
Attention: Default task will clean the dist directory first.
```
$ gulp
```
##### Watch File Change
It will open a new page automatically and refresh when the files you are watching change.
```
$ gulp watch
```
### Example Screen Shot
![image](https://raw.githubusercontent.com/GuangZhouShanyouGame/24haowan-gulp/master/screen-shot.png?token=AMlX79bSF_lZ_mEfyP55vJROmgunrLuUks5YQ582wA%3D%3D)
### Tasks
#### sass
- 自动补全前缀（主要是-webkit-）
- 编译SASS，并压缩生成的CSS
- 添加文件指纹
- 输出新文件到dist目录
  
#### script
- 压缩并混淆js
- 添加文件指纹
- 输出新文件到dist目录

#### html
- 处理HTML合并（代码中写有类似@@include('XXX.html')的，将引入该HTML文件，相当于PHP的include）
- 输出新文件到dist目录

#### rev
- 对dist目录下所有文件的引用地址进行修改（达到增量更新）

#### clean
- 清空dist目录

#### build
- 并行执行sass、script、html任务
- 处理完毕后执行rev任务

#### hot-build
- 先执行build任务
- 刷新浏览器

#### default
- 先执行clean任务
- 执行build任务

#### watch
- 初始化browser-sync（将自动打开网页）
- 监听SCSS文件，变化则执行hot-build方法
- 监听JS文件，变化则执行hot-build方法
- 监听HTML文件，变化则执行hot-build方法
