var gulp = require('gulp'),
	sass = require('gulp-sass'),
	sourcemaps = require('gulp-sourcemaps'),
	browsersync = require('browser-sync').create(),
	output = 'resources/css';

gulp.task('default', ['sass','watch'],function(){
	browsersync.init({
			port:3000,
			browser: "google chrome",
			server: './'
    });
});
gulp.task('sass',function() {
	return gulp.src('resources/scss/*.scss')
	.pipe(sourcemaps.init())
	.pipe(sass({outputStyle: 'compressed',sourceMap:'sass'}))
	.on('error', handlerError)
	.pipe(sourcemaps.write('./'))
	//.pipe(sass().on('error', sass.logError))
	.pipe(gulp.dest(output));
});
gulp.task('publish-css',function(){
	return gulp.src('resources/scss/*.scss')
	.pipe(sass({outputStyle:'compressed'}))
	.pipe(gulp.dest(output));
});
gulp.task('watch', function() {
	gulp.watch('resources/scss/**/*.scss',['sass']);
	gulp.watch('*.html').on('change', browsersync.reload);
  gulp.watch('resources/css/**/*.css').on('change', browsersync.reload);
	gulp.watch('resources/app/**/*.js').on('change', browsersync.reload);
});
function handlerError(){
  this.emit('end');
}
