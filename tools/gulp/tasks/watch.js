module.exports = function () {
	$.gulp.task('watch', () => {
		// $.gulp.watch('./src/pages/**/*.pug', $.gulp.series('clean'));
		// $.gulp.watch('./src/sass/**/*.scss', $.gulp.series('fonts'));
		$.gulp.watch([
            $.gulpVariables.dir.src.images,
            $.gulpVariables.dir.src.icons,
            $.gulpVariables.dir.src.favicon
        ], $.gulp.series('images', 'icons', 'favicon'));

		$.gulp.watch($.gulpVariables.dir.src.pages, $.gulp.series('pug'));
		//$.gulp.watch('./src/js/**/*.js', $.gulp.series('js:libs', 'js:copy'));
		$.gulp.watch($.gulpVariables.dir.src.sass, $.gulp.series('styles'));
	});
}
