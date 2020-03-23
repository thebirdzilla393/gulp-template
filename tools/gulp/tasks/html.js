module.exports = function() {
	$.gulp.task('html', () => {
		return $.gulp.src([
				$.gulpVariables.dir.src.pages,
				$.gulpVariables.dir.src.notPageLayout,
				$.gulpVariables.dir.src.notPageTemplates
			])
			.pipe($.loadPlugins.pug({pretty: true})
				.on('error', $.loadPlugins.notify.onError(function(error) {
					return { title: 'Html', message: error.message };
				}))
			)
			.pipe($.gulp.dest($.gulpVariables.dir.dist.dir_name))
			.on('end', $.browserSync.reload); // перезагрузка страницы строго после обновления всех страниц
	});
}
