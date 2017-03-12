var gulp = require('gulp');
var connect = require('gulp-connect');

gulp.task('start-server', function() {
	connect.server({
		port: 8000
	});
});

gulp.task('default',['start-server']);