module.exports = function () {
	
	// Задача для разработки
	$.gulp.task('styles:dev', () => {
		return $.gulp.src($.gulpVariables.dir.src.styles)
			.pipe($.loadPlugins.sass({outputStyle: 'expanded'}) //'include css': true,
				.on('error', $.loadPlugins.notify.onError(function(error) {
					return { title: 'Styles', message: error.message };
				}))
			)
			.pipe($.loadPlugins.autoprefixer({  // префиксы для браузеров
			 	overrideBrowserslist: ['last 3 versions']
			}))
			.pipe($.gulp.dest($.gulpVariables.dir.dist.styles))
			.pipe($.browserSync.reload({stream: true})); // обновление без перезагрузки страницы
	});

	// Задачи для прода
	// Задача для записи расширенного файла css и map
	$.gulp.task('styles:css:map', () => {
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
			.pipe($.loadPlugins.sourcemaps.write('.'))
			.pipe($.gulp.dest($.gulpVariables.dir.dist.styles))
			.pipe($.browserSync.reload({stream: true})); // обновление без перезагрузки страницы
	});

	// Задача для записи минимизированной версии файла
	$.gulp.task('styles:min', () => {
		return $.gulp.src($.gulpVariables.dir.src.styles)
			.pipe($.loadPlugins.sass({outputStyle: 'compressed'}) //'include css': true,
				.on('error', $.loadPlugins.notify.onError(function(error) {
					return { title: 'Styles', message: error.message };
				}))
			)
			.pipe($.loadPlugins.autoprefixer({  // префиксы для браузеров
			 	overrideBrowserslist: ['last 3 versions']
			}))
			.pipe($.loadPlugins.csso()) // минимизация файла
			.pipe($.loadPlugins.rename({suffix: '.min'})) // запись в min.css
			.pipe($.gulp.dest($.gulpVariables.dir.dist.styles))
	});

	// dev
	$.gulp.task('styles', $.gulp.series('styles:dev'));

	// prod
	$.gulp.task('styles:prod', $.gulp.parallel('styles:css:map', 'styles:min'));
}
