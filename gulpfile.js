'use strict';

global.$ = {
	gulp: require('gulp'),
	browserSync: require('browser-sync').create(),
    loadPlugins: require('gulp-load-plugins')(),
	gulpVariables: require('./tools/gulp/variables/variables.js'),
	rimraf: require('rimraf')
};

$.gulpVariables.taskPaths.forEach(function(taskPath) {
	require(taskPath)();
});

$.gulp.task('default',
	$.gulp.series(
		'clean',
		$.gulp.parallel(
			'buildAppStyles',
			'buildMainAppHtml',
			'buildAppHtml',
			'buildAppImages',
			'buildAppIcons',
			'buildAppFavicon',
			'buildAppFonts',
			'buildAppJs'
		),
		$.gulp.parallel(
			'watch',
			'webserver'
		)
	)
);
