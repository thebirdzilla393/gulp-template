module.exports = function() {
	$.gulp.task('clean', () => {
		return $.loadPlugins.rimraf($.gulpVariables.dir.dist.dir_name, cb);
	});
}
