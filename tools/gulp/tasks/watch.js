module.exports = function () {
	$.gulp.task('watch', () => {
		$.gulp.watch([$.gulpVariables.dir.watch.commonStyles, $.gulpVariables.dir.watch.pageStyles], $.gulp.series('buildAppStyles'));
		$.gulp.watch([$.gulpVariables.dir.watch.mainPage, $.gulpVariables.dir.watch.pages, $.gulpVariables.dir.watch.templates], $.gulp.series('buildMainAppHtml', 'buildAppHtml'));
		$.gulp.watch([$.gulpVariables.dir.watch.images, $.gulpVariables.dir.watch.icons, $.gulpVariables.dir.watch.favicon], $.gulp.series('buildAppImages', 'buildAppIcons', 'buildAppFavicon'));
		$.gulp.watch($.gulpVariables.dir.watch.fonts, $.gulp.series('buildAppFonts'));
		$.gulp.watch([$.gulpVariables.dir.watch.js, $.gulpVariables.dir.watch.libsJs], $.gulp.series('buildAppJs'));
	});
}
