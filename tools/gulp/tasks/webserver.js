module.exports = function () {
	// Static server
	$.gulp.task('webserver', () => {
		return $.browserSync.init($.gulpVariables.serverConfig);
	});
}
