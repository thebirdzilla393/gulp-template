module.exports = function () {
	$.gulp.task('styles', () => {
		return $.gulp.src($.gulpVariables.dir.src.sass)
			.pipe($.loadPlugins.sourcemaps.init())
			.pipe($.loadPlugins.sass({
				'include css': true
			}))
			.on('error', $.loadPlugins.notify.onError(function(error) {
				return {
					title: 'Styles',
					message: error.message,
				};
			}))
			.pipe($.loadPlugins.autoprefixer({  // префиксы для браузеров
				browsers: ['last 3 versions']
			}))
			.pipe($.loadPlugins.csso()) // объеденение стилей повторных
			.pipe($.loadPlugins.sourcemaps.write())
			.pipe($.gulp.dest($.gulpVariables.dir.dist.css))
			.pipe($.browserSync.reload({
				stream: true	// обновление стилей без перезагрузки страницы
			}));
	});
}
