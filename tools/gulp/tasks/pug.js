module.exports = function() {
	$.gulp.task('buildAppHtml', () => {
		return $.gulp.src($.gulpVariables.dir.src.pages)
			.pipe($.loadPlugins.pug({pretty: true})
				.on('error', $.loadPlugins.notify.onError(function(error) {
					return { mtitle: 'Pug', message: error.message };
				}))
			)
			.pipe($.gulp.dest($.gulpVariables.dir.dist.pages))
			.on('end', $.browserSync.reload); // перезагрузка страницы строго после обновления всех страниц
	});

	$.gulp.task('buildMainAppHtml', () => {
		return $.gulp.src($.gulpVariables.dir.src.mainPage)
			.pipe($.loadPlugins.pug({pretty: true})
				.on('error', $.loadPlugins.notify.onError(function(error) {
					return { title: 'Pug', message: error.message };
				}))
			)
			.pipe($.gulp.dest($.gulpVariables.dir.dist.mainPage))
			.on('end', $.browserSync.reload); // перезагрузка страницы строго после обновления всех страниц
	});
}
