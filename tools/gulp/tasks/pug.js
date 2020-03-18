module.exports = function() {
	$.gulp.task('pug', () => {
		return $.gulp.src($.gulpVariables.dir.src.pages)
			.pipe($.loadPlugins.pug({
				pretty: true // верстка не в одну строку
			}))
			.on('error', $.loadPlugins.notify.onError(function(error) {
				return {
					title: 'Pug',
					message: error.message,
				};
			}))
			.pipe($.gulp.dest($.gulpVariables.dir.dist.pages))
			.on('end', $.browserSync.reload); // перезагрузка страницы строго после обновления всех страниц
	});
}
