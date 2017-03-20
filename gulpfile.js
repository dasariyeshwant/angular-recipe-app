var gulp = require('gulp');
var connect = require('gulp-connect');
var sass = require('gulp-sass');
var watch = require('gulp-watch');


gulp.task('start-server', function() {
	connect.server({
		port: 8000
	});
});

gulp.task('sass-compiler', function() {
	return gulp.src('./public/css/*.scss')
    	.pipe(sass().on('error', sass.logError))
    	.pipe(gulp.dest('./public/css/'));
});

gulp.task('watch', function() {
	gulp.watch('./public/css/*.scss', ['sass-compiler'])
});



gulp.task('default',['sass-compiler', 'watch', 'start-server']);