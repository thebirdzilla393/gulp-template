module.exports = function () {
	// $.gulp.task('js:libs', () => {
	// 	return $.gulp.src([
	// 			'node_modules/lib',
	// 			'node_modules/lib'
	// 		])
	// 		.pipe($.loadPlugins.concat('libs.min.js'))
	// 		.pipe($.loadPlugins.uglify())
	// 		.pipe($.gulp.dest('./dist/js/libs/'))
	// 		.pipe($.browserSync.reload({
	// 			stream: true	// обновление стилей без перезагрузки страницы
	// 		}));
	// });

	$.gulp.task('buildAppJs', () => {
		return $.gulp.src($.gulpVariables.dir.src.js)
			//.pipe($.loadPlugins.uglify())
			.pipe($.gulp.dest($.gulpVariables.dir.dist.js))
			.pipe($.browserSync.reload({stream: true})); // обновление без перезагрузки страницы
	});
}
