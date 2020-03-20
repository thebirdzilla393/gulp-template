module.exports = function() {
	$.gulp.task('clean', (cb) => {
		return $.rimraf($.gulpVariables.dir.dist.dir_name, cb);
	});
}
