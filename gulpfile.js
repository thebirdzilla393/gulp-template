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

$.gulp.task('watch',
	$.gulp.series(
		'clean',
		$.gulp.parallel('fonts', 'styles' ,'images' ,'js' ,'html' ),
		$.gulp.parallel('watcher', 'webserver')
	)
);

$.gulp.task('watch:prod',
	$.gulp.series(
		'clean',
		$.gulp.parallel('fonts', 'styles:prod' ,'images' ,'js:prod' ,'html'),
		$.gulp.parallel('watcher:prod', 'webserver')
	)
);
