module.exports = function () {
	// Static server
	$.gulp.task('serve', () => {
		$.browserSync.init({
			server: {
				baseDir: $.gulpVariables.dir.dist.dir_name
			}
		});
	});
}
