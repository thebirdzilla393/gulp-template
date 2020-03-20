module.exports = function () {
	$.gulp.task('buildAppStyles', () => {
		return $.gulp.src($.gulpVariables.dir.src.styles)
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
				overrideBrowserslist: ['last 3 versions']
			}))
			.pipe($.loadPlugins.csso()) // объеденение стилей повторных
			.pipe($.loadPlugins.sourcemaps.write())
			.pipe($.gulp.dest($.gulpVariables.dir.dist.styles))
			.pipe($.browserSync.reload({stream: true})); // обновление без перезагрузки страницы
	});
}
