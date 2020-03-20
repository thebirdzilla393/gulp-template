module.exports = function() {
	$.gulp.task('buildAppFonts', () => {
		return $.gulp.src($.gulpVariables.dir.src.fonts)
			.pipe($.gulp.dest($.gulpVariables.dir.dist.fonts));	
	});
}
