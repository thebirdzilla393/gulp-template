module.exports = function () {
	$.gulp.task('styles', () => {
		return $.gulp.src($.gulpVariables.dir.src.styles)
			.pipe($.loadPlugins.sourcemaps.init())
			.pipe($.loadPlugins.sass({outputStyle: 'expanded'}) //'include css': true,
				.on('error', $.loadPlugins.notify.onError(function(error) {
					return { title: 'Styles', message: error.message };
				}))
			)
			.pipe($.loadPlugins.autoprefixer({  // префиксы для браузеров
			 	overrideBrowserslist: ['last 3 versions']
			}))
			.pipe($.loadPlugins.sourcemaps.write())
			.pipe($.gulp.dest($.gulpVariables.dir.dist.styles))
			.pipe($.loadPlugins.csso()) // минимизация файла (запись в min.css)
			.pipe($.loadPlugins.sourcemaps.write())
			.pipe($.loadPlugins.rename({suffix: '.min'}))
			.pipe($.gulp.dest($.gulpVariables.dir.dist.styles))
			.pipe($.browserSync.reload({stream: true})); // обновление без перезагрузки страницы
	});
}
