module.exports = function() {
	$.gulp.task('buildAppImages', () => {
		return $.gulp.src($.gulpVariables.dir.src.images)
			.pipe($.gulp.dest($.gulpVariables.dir.dist.images));
	});

	$.gulp.task('buildAppIcons', () => {
		return $.gulp.src($.gulpVariables.dir.src.icons)
			.pipe($.gulp.dest($.gulpVariables.dir.dist.icons));
	});

	$.gulp.task('buildAppFavicon', () => {
		return $.gulp.src($.gulpVariables.dir.src.favicon)
			.pipe($.gulp.dest($.gulpVariables.dir.dist.favicon));
	});
}
