module.exports = function () {
	$.gulp.task('js:libs', () => {
		return $.gulp.src([
				'node_modules/lib',
				'node_modules/lib'
			])
			.pipe($.loadPlugins.concat('libs.min.js'))
			.pipe($.loadPlugins.uglify())
			.pipe($.gulp.dest('./dist/js/libs/'))
			.pipe($.browserSync.reload({
				stream: true	// обновление стилей без перезагрузки страницы
			}));
	});

	$.gulp.task('js:copy', () => {
		return $.gulp.src(['./src/js/*.js'])
			//.pipe($.loadPlugins.uglify())
			.pipe($.gulp.dest('./dist/js/'))
			.pipe($.browserSync.reload({
				stream: true	// обновление стилей без перезагрузки страницы
			}));
	});
}
