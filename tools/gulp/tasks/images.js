module.exports = function() {
	$.gulp.task('images', () => {
		return $.gulp.src($.gulpVariables.dir.src.images)
			.pipe($.gulp.dest($.gulpVariables.dir.dist.images));
	});

	$.gulp.task('icons', () => {
		return $.gulp.src($.gulpVariables.dir.src.icons)
			.pipe($.gulp.dest($.gulpVariables.dir.dist.icons));
	});

	$.gulp.task('favicon', () => {
		return $.gulp.src($.gulpVariables.dir.src.favicon)
			.pipe($.gulp.dest($.gulpVariables.dir.dist.favicon));
	});
}
