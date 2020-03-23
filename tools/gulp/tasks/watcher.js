module.exports = function () {
	$.gulp.task('watcher', () => {
		$.gulp.watch($.gulpVariables.dir.watch.fonts, $.gulp.series('fonts'));
		$.gulp.watch($.gulpVariables.dir.watch.styles, $.gulp.series('styles'));
		$.gulp.watch($.gulpVariables.dir.watch.images, $.gulp.series('images'));
		$.gulp.watch($.gulpVariables.dir.watch.js, $.gulp.series('js'));
		$.gulp.watch($.gulpVariables.dir.watch.pages, $.gulp.series('html'));
	});

	$.gulp.task('watcher:prod', () => {
		$.gulp.watch($.gulpVariables.dir.watch.styles, $.gulp.series('styles:prod'));
		$.gulp.watch($.gulpVariables.dir.watch.images, $.gulp.series('images'));
		$.gulp.watch($.gulpVariables.dir.watch.js, $.gulp.series('js:prod'));
		$.gulp.watch($.gulpVariables.dir.watch.pages, $.gulp.series('html'));
	});
}
