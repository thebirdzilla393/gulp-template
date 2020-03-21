module.exports = function() {
	$.gulp.task('images', () => {
		return $.gulp.src($.gulpVariables.dir.src.images)
			.pipe($.gulp.dest($.gulpVariables.dir.dist.dir_name)); //`${$.gulpVariables.dir.dist.dir_name}/`
	});
}
