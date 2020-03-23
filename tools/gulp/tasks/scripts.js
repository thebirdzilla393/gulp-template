module.exports = function () {

	$.gulp.task('js:dev', () => {
		return $.gulp.src([$.gulpVariables.dir.src.js, $.gulpVariables.dir.src.notJsOfTemplates])
			.pipe($.gulp.dest($.gulpVariables.dir.dist.js))
			.pipe($.browserSync.reload({stream: true})); // обновление без перезагрузки страницы
	});

	$.gulp.task('js:prod', () => {
		return $.gulp.src([$.gulpVariables.dir.src.js, $.gulpVariables.dir.src.notJsOfTemplates])
			.pipe($.gulp.dest($.gulpVariables.dir.dist.js))
			.pipe($.loadPlugins.uglify()) // минимизация файла (запись в min.js)
			.pipe($.loadPlugins.rename({suffix: '.min'}))
			.pipe($.gulp.dest($.gulpVariables.dir.dist.js))
			.pipe($.browserSync.reload({stream: true})); // обновление без перезагрузки страницы
	});

	// $.gulp.task('js:libs', () => {
	// 	return $.gulp.src([
	// 		'node_modules/lib',
	// 		'node_modules/lib'
	// 	])
	// 	//.pipe($.loadPlugins.concat('libs.min.js'))
	// 	.pipe($.gulp.dest($.gulpVariables.dir.dist.libsJs))
	// 	.pipe($.loadPlugins.uglify()) // минимизация файла (запись в min.js)
	// 	.pipe($.loadPlugins.rename((path) => { path.extname = '.min' + path.extname; }))
	// 	.pipe($.gulp.dest($.gulpVariables.dir.dist.libsJs))
	// 	.pipe($.browserSync.reload({stream: true})); // обновление без перезагрузки страницы
	// });

	// dev
	$.gulp.task('js', $.gulp.series('js:dev'));

	// prod
	$.gulp.task('js:prod', $.gulp.series('js:prod'));
}
